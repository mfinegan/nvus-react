import React from 'react'
import MenuItem, { MenuItemProps } from './MenuItem'
import './Menu.scss'
import MenuSelector from './MenuSelector'
import { MenuDirection } from './MenuSelector'

type MenuProps = {
    title: string
    /** Array of Menu Items */
    items: MenuItemProps[]

    onArrowClick: (dir: MenuDirection, title: string) => void
    windowOpen: (key: string) => void
    hasArrows: boolean
}

const GenerateElement = (el: MenuItemProps, onClick: (key: string) => void) => {
    return (
        <li className={'menu-container-list-item'} key={el.label}>
            <MenuItem
                label={el.label}
                icon={el.icon}
                onClick={() => onClick(el.label)}
                child={el.child}
            />
        </li>
    )
}

function Menu(props: MenuProps) {
    return (
        <div className="menu-container">
            <div className="menu-container-title-container">
                <MenuSelector
                    onArrowClick={props.onArrowClick}
                    title={props.title}
                    hasArrows={props.hasArrows}
                />
            </div>
            <ul className={'menu-container-list'}>
                {props.items.map((item) =>
                    GenerateElement(item, props.windowOpen)
                )}
            </ul>
        </div>
    )
}

export default Menu
