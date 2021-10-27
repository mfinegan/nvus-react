import React from 'react'
import MenuItem, { MenuItemProps } from './MenuItem'
import './Menu.scss'
import MenuSelector from './MenuSelector'

type MenuProps = {
    title: string
    /** Array of Menu Items */
    items: MenuItemProps[]

    onArrowClick: Function
    windowOpen: Function
}

const GenerateElement = (el: MenuItemProps, onClick: Function) => {
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
