import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";
import './MenuItem.scss';

export type MenuItemProps = {

    /** Label for Menu Item */
    label: string,

    /** Name of the FontAwesome Icon Class */
    iconClass: IconPrefix,

    /** Name of the FontAwesome Icon */
    iconName: IconName,

    /** Function Callback for when Pinned Action is executed */
    onClick?: Function,

    child: React.ReactNode

};


function MenuItem( props: MenuItemProps) {

    return (
        <div className="menu-item-container" onClick={ ()=> props.onClick? props.onClick(props.label):console.log('err')}>
            <FontAwesomeIcon icon={[props.iconClass, props.iconName]} />
            <span className="menu-item-label">{props.label.toUpperCase()}</span>
        </div>
    );
}

export default MenuItem;