import React from "react";
import MenuItem, { MenuItemProps } from "./MenuItem";
import './Menu.scss';

type MenuProps = {

    /** Array of Menu Items */
    items: MenuItemProps[]

};


const GenerateElement = ( el: MenuItemProps) => {
    return (
        <li className={"menu-container-list-item"} key={el.label}>
            <MenuItem label={el.label} icon={el.icon} onClick={el.onClick} child={el.child} />
        </li>
    );
}

function Menu( props: MenuProps) {

    return (
        <div className="menu-container">
            <ul className={"menu-container-list"}>
                {props.items.map(item=>GenerateElement(item))}
            </ul>
        </div>
    );
}

export default Menu;