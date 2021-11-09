import React from 'react'
import './MenuItem.scss'

export type MenuItemProps = {
    /** Label for Menu Item */
    label: string

    /** Name of the FontAwesome Icon Class */
    icon: React.ReactNode

    /** Function Callback for when Pinned Action is executed */
    onClick?: (key: string) => void

    child: JSX.Element

    optionalParams?: OptionalWindowParameters
}

export type OptionalWindowParameters = {
    minX?: number

    minY?: number

    width?: number

    height?: number
}

function MenuItem(props: MenuItemProps) {
    return (
        <div
            className="menu-item-container"
            onClick={() => {
                if (props.onClick) props.onClick(props.label)
            }}
        >
            <div className="menu-item-button-label-container">
                <div className="icon-container"> {props.icon} </div>
                <span className="menu-item-label">
                    {props.label.toUpperCase()}
                </span>
            </div>
        </div>
    )
}

export default MenuItem
