import React from 'react'
import enhancedCounter from './enhancedCounter'

const HoverCounter = (props) => {
    return (
        <div>
            <h1 onMouseEnter={props.increment}>Hover {props.count} times</h1>
        </div>
    )
}

export default enhancedCounter(HoverCounter);
