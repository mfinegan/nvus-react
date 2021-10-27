import React from 'react';
import Visor from './Visor'
import useLayout from './Hooks/useLayout'
import { MenuItemProps } from './Menu/MenuItem'
import Menu from './Menu/Menu'
import './Layout.scss'

interface NVUSMenu {
    title: string
    menuItems: MenuItemProps[]
}

type LayoutProps = {
    /** Array of MenuItems to render */
    items: NVUSMenu[]
}

/**
 * High-level wrapper component that contains the core components that drive the windowing environment
 */
function Layout(props: LayoutProps) {
    const menuMap: Map<string, MenuItemProps[]> = new Map<
        string,
        MenuItemProps[]
    >()

    //Build Menu Map from props
    props.items.forEach((item) => {
        menuMap.set(item.title, item.menuItems)
    })

    const {
        title,
        openWindow,
        closeWindow,
        pinWindow,
        onArrowClick,
        menuItems,
        items,
    } = useLayout(menuMap)

    return (
        <div className="layout-container">
            <Menu
                title={title}
                items={menuItems}
                onArrowClick={onArrowClick}
                windowOpen={openWindow}
            />
            <Visor items={items} onClosed={closeWindow} onPinned={pinWindow} />
        </div>
    )
}

export default Layout
