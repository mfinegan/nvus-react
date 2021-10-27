import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import './WindowResizeHandle.scss'

/**
 * Wrapper component for the resize icon to be used as a resize handle
 */

const BottomRightHandle = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div {...props} ref={ref} className={'window-resize-handle'}>
            <FontAwesomeIcon className="resize-handle-se" icon={faExpandAlt} />
        </div>
    )
})

export default BottomRightHandle
