import React from 'react'
import './MenuSelector.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

export enum MenuDirection {
    Up,
    Down,
}
interface MenuSelectorProps {
    title: string
    onArrowClick: Function
}

function MenuSelector(props: MenuSelectorProps) {
    return (
        <div className="menu-selector-container">
            <div className="menu-selector-icons">
                <FontAwesomeIcon
                    icon={faCaretUp}
                    onClick={() =>
                        props.onArrowClick(MenuDirection.Up, props.title)
                    }
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                    icon={faCaretDown}
                    onClick={() =>
                        props.onArrowClick(MenuDirection.Down, props.title)
                    }
                ></FontAwesomeIcon>
            </div>
            <div className="menu-selector-label">
                <span className="menu-selector-title">{props.title}</span>
            </div>
        </div>
    )
}

export default MenuSelector
