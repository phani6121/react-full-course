import React from 'react'
import enhancedCounter from './enhancedCounter'

const ClickCounter = (props) => {
    return (
        <div>
            <button onClick={props.increment}>counter clicked{props.count}times</button>
        </div>
    )
}

export default enhancedCounter(ClickCounter);
