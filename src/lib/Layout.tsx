import { useState } from "react";
import Visor from './Visor';
import { ReactGridLayoutComponent } from "./Window/Window";
import { MenuItemProps } from "./Menu/MenuItem";
import Menu from "./Menu/Menu";

import './Layout.scss';

type LayoutProps = {

    /** Array of MenuItems to render */
    items: MenuItemProps[],
};

/**
 * High-level wrapper component that contains the core components that drive the windowing environment
 */
function Layout(props: LayoutProps) {



    const [items, setItems] = useState<ReactGridLayoutComponent[]>([]);
    const [menuItems] = useState<MenuItemProps[]>(props.items);

    const onOpen = (key: string) => {
        let count = items.filter(x => x.i.startsWith(key)).length + 1;
        let keyStr = count === 1 ? key : `${key} (${count})`;
        let node = menuItems.filter(x=>x.label===key)[0].child;
        let icon = menuItems.filter(x=>x.label===key)[0].icon;
        setItems(items.concat({ i: keyStr, x: 1, y: 1, w: 4, h: 4, minW: 4, minH: 4, static: false , child: node, icon: icon }));
    }
    let menuItemToAlter = props.items;
    menuItemToAlter.forEach(item=>{
        item.onClick=onOpen;
    })

    const onClosed = (key: string) => {
        setItems(items.filter(x => x.i !== key));
    }

    const onPinned = (key: string) => {
        items.filter(x => x.i === key).forEach(x => {
            x.static = !x.static;
        });
    }

    return (

        <div className="layout-container">
            <Menu items={menuItems} />
            <Visor items={items} onClosed={onClosed} onPinned={onPinned} />
        </div>
    );
}

export default Layout;