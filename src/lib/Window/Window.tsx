import React, { ReactNode, useEffect} from "react";
import './Window.scss';
import UseWindow from './Hooks/useWindow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
    child?: React.ReactNode,

    /** State characteristics of this window */
    layout: ReactGridLayoutComponent,

    /** Function Callback for when Pinned Action is executed */
    onPinned: Function,

    /** Function callback for when Close Window Action is executed */
    onClosed: Function
};

function Window({ title, child, layout, onPinned, onClosed }: WindowProps) {
  
    const { isOpen, isPinned, toggleOpen, togglePinned} = UseWindow({key:layout.i});

    useEffect(()=>{
        if(isPinned)
            onPinned(layout.i);
    },[isPinned, layout.i, onPinned]);

    useEffect(()=>{
        if(!isOpen)
            onClosed(layout.i);
    },[isOpen, layout.i, onClosed]);

    const handleClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { evt.stopPropagation(); };

    return (

        <div className={!isPinned ? "window-container draggable " : " window-container"}>
            <div className="window-header p-d-flex">

                <div className="window-title">
                    <div className="icon-container">{layout.icon} </div>
                    <span className="window-title-label">{title.toUpperCase()}</span>
                </div>
                <div className="window-header-buttons ">
                    <button className={isPinned ? "window-header-button pinned-active" : "window-header-button"} onClick={togglePinned} onMouseDown={e => handleClick(e)}>
                        <FontAwesomeIcon icon={["fad", "thumbtack"]} />
                    </button>
                    <button className={!isPinned? "window-header-button":"window-header-button button-disabled"} onClick={toggleOpen} disabled={isPinned} onMouseDown={e => handleClick(e)}>
                        <FontAwesomeIcon icon={["fad", "window-close"]} />
                    </button>
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