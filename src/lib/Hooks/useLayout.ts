import { useState, useCallback } from 'react'
import { MenuItemProps } from '../Menu/MenuItem'
import { ReactGridLayoutComponent } from './../Window/Window'
import { MenuDirection } from './../Menu/MenuSelector'
import { MenuItemProps } from '../Menu/MenuItem'

/**
 * Javascript Modulo Operator is not friendly when evaluating negative operands
 * @param n
 * @param m
 */
function mod(n: number, m: number) {
    return ((n % m) + m) % m
}

export default function useLayout(menuMap: Map<string, MenuItemProps[]>) {
    const [items, setItems] = useState<ReactGridLayoutComponent[]>([])
    const [menuItems, setMenuItems] = useState<MenuItemProps[]>(
        Array.from(menuMap.values())[0] as MenuItemProps[]
    )
    const [title, setTitle] = useState(
        Array.from(menuMap.keys()).shift() as string
    )

    const openWindow = useCallback(
        (key: string) => {
            //Are there existing instances of this window open? If so determine the nth instance
            const count = items.filter((x) => x.i.startsWith(key)).length
            const keyStr = count === 0 ? key : `${key} (${count + 1})`

            //Find array of MenuItems associated with the corresponding menu
            const item = menuItems.find((x) => x.label === key)
            if (item === undefined) {
                throw new TypeError('MenuItem cannot be undefined')
            }

            //TO-DO: Window Placing Logic => see Tile Placing Problem
            setItems(
                items.concat({
                    i: keyStr,
                    x: 1,
                    y: 1,
                    w: 4,
                    h: 4,
                    minW: 4,
                    minH: 4,
                    static: false,
                    child: item.child,
                    icon: item.icon,
                })
            )
        },
        [setItems, items, menuItems]
    )

    const closeWindow = useCallback(
        (key: string) => {
            //setItems to be the filtered list of items without the key
            setItems(items.filter((x) => x.i !== key))
        },
        [setItems, items]
    )

    const pinWindow = useCallback(
        (key: string) => {
            //Set the static flag for the respective window that is to be pinned
            items
                .filter((x) => x.i === key)
                .forEach((x) => {
                    x.static = !x.static
                })
        },
        [items]
    )

    const onArrowClick = useCallback(
        (direction: MenuDirection, menuTitle: string) => {
            //Find index of current menu title
            const vals = Array.from(menuMap.keys())
            let idx = vals.findIndex((x) => x === menuTitle)

            //Increment/decrement index relative to the direction being traversed
            if (direction === MenuDirection.Up) {
                idx = mod(idx + 1, vals.length)
            } else if (direction === MenuDirection.Down) {
                idx = mod(idx - 1, vals.length)
            } else {
                throw new Error('Invalid call to Arrowclick Callback')
            }

            //Establish the key of the new menu item
            const key = vals[idx] as string

            //Set the title of the menu
            setTitle(key)

            //Set the menu items
            setMenuItems(menuMap.get(key) as MenuItemProps[])
        },
        [menuMap]
    )

    return {
        title,
        openWindow,
        closeWindow,
        pinWindow,
        onArrowClick,
        menuItems,
        items,
    }
}
