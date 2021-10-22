import React, { ReactNode, useState } from "react";

import './Window.scss';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { JsxElement } from "typescript";


export type ReactGridLayoutComponent = {
    i: string,
    x: number,
    y: number,
    w: number,
    h: number,
    minW?: number,
    minH?: number
    static?: boolean,
    isDraggable?: boolean,
    isResizeable?: boolean,
    child: React.ReactNode,
    icon: ReactNode
};


type WindowProps = {

    /** Title of the window */
    title: string,

    /** Child component to render */
    child: React.ReactNode,

    /** State characteristics of this window */
    layout: ReactGridLayoutComponent,

    /** Function Callback for when Pinned Action is executed */
    onPinned: Function,

    /** Function callback for when Close Window Action is executed */
    onClosed: Function
};


function Window({ title, child, layout, onPinned, onClosed }: WindowProps) {

    const [isOpen, setIsOpen] = useState(true);
    const [isPinned, setIsPinned] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        onClosed(layout.i);
    };

    const togglePinned = () => {
        setIsPinned(!isPinned);
        onPinned(layout.i);
    };

    const handleClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { evt.stopPropagation(); };

    return (

        <div className={!layout.static ? "window-container draggable " : " window-container"}>
            <div className="window-header p-d-flex">
                
                <div className="window-title">{layout.icon} <span>{title.toUpperCase()}</span></div>
                <div className="window-header-buttons ">
                    <Button className={isPinned ? "window-header-button p-button-outlined p-mr-2 pinned-active" : "window-header-button p-button-outlined p-mr-2"} onClick={togglePinned} onMouseDown={e => handleClick(e)}>
                        <FontAwesomeIcon icon={["fad", "thumbtack"]} />
                    </Button>
                    <Button className="window-header-button p-button-outlined" onClick={toggleOpen} disabled={isPinned} onMouseDown={e => handleClick(e)}>
                        <FontAwesomeIcon icon={["fad", "window-close"]} />
                    </Button>
                </div>
            </div>
            <div className="window-body">
                <div className="window-body-content">
                    {child}
                </div>
            </div>
            <div className="window-footer">
            </div>
        </div>
    );
}

export default Window;