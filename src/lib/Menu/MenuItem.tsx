import React from "react";
import './MenuItem.scss';

export type MenuItemProps = {

    /** Label for Menu Item */
    label: string,

    /** Name of the FontAwesome Icon Class */
    icon: React.ReactNode

    /** Function Callback for when Pinned Action is executed */
    onClick?: Function,

    child: React.ReactNode

};


function MenuItem( props: MenuItemProps) {

    return (
        <div className="menu-item-container" onClick={ ()=> props.onClick? props.onClick(props.label):console.log('err')}>
            <div className="icon-container"> {props.icon} </div>
            <span className="menu-item-label">{props.label.toUpperCase()}</span>
        </div>
    );
}

export default MenuItem;