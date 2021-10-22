import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WindowResizeHandle.scss';

/**
 * Wrapper component for the resize icon to be used as a resize handle
 */

const BottomRightHandle = React.forwardRef<HTMLDivElement>((props, ref) =>{ 
    return (
        <div {...props} ref={ref} className={ "window-resize-handle"}>
            <FontAwesomeIcon icon={["fad", "expand-alt"]} className="resize-handle-se"></FontAwesomeIcon>
        </div>
    );
});

export default BottomRightHandle;