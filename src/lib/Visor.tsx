import React from 'react'
import Window, { ReactGridLayoutComponent } from './Window/Window'
import { WidthProvider, Responsive } from 'react-grid-layout'
import './Visor.scss'
import BottomRightHandle from './Window/WindowResizeHandle'
const ResponsiveReactGridLayout = WidthProvider(Responsive)

type VisorProps = {
    /** Array of windows to render */
    items: ReactGridLayoutComponent[]

    /** Function callback for when a window is closed */
    onClosed: Function

    /** Function callback for when a window is pinned */
    onPinned: Function
}

/**
 * Component pane that contains all of the windows within a ResponsiveReactGridLayout
 */

function Visor(props: VisorProps) {
    const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }
    const onPinned = (key: string) => {
        props.onPinned(key)
    }
    const onClosed = (key: string) => {
        props.onClosed(key)
    }

    const GenerateElement = (el: ReactGridLayoutComponent) => {
        return (
            <div
                key={el.i}
                data-grid={{
                    x: el.x,
                    y: el.y,
                    w: el.w,
                    h: el.h,
                    minH: el.h,
                    minW: el.w,
                    static: el.static,
                }}
            >
                <Window
                    title={el.i}
                    child={el.child}
                    layout={el}
                    onPinned={onPinned}
                    onClosed={onClosed}
                ></Window>
            </div>
        )
    }

    return (
        <div className="visor-container">
            <ResponsiveReactGridLayout
                className="layout"
                rowHeight={30}
                cols={cols}
                draggableHandle={'.draggable'}
                isBounded={true}
                resizeHandle={<BottomRightHandle></BottomRightHandle>}
            >
                {props.items.map((x) => GenerateElement(x))}
            </ResponsiveReactGridLayout>
        </div>
    )
}

export default Visor
