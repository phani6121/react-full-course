import React, { useState } from 'react';
import useCounter from './useCounter';

const FirstCounter = () => {

    const [count, increment, decrement, reset] = useCounter();

    return (
        <div>
            <h1>count=={count}</h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>

        </div>
    )
}

export default FirstCounter;
