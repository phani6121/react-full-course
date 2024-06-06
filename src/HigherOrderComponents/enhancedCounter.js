import React, { useState } from 'react'

const enhancedCounter = (OriginalComponent) => {

    const NewCounter = () => {

        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(count + 1)
        };

        return <OriginalComponent count={count} increment={increment} />
    };

    return NewCounter;

}

export default enhancedCounter
