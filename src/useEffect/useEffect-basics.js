import React, { useEffect, useState } from 'react'

const Index = () => {

    const [count, setCount] = useState(0);

    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        console.log("hello i am coming from useEffect", count);
    }, [count, toggle]);



    return (
        <div>
            <h1>Learn useEffect</h1>
            <h1 onClick={() => setToggle(!toggle)}>{toggle ? "open" : "close"}</h1>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>+</button>
        </div>
    )
}

export default Index;
// useEffect first argument is call back function , second argument is dependency it is like array [], Third argument we are given dependencies in array single or multiple,

// useEffect main use to bring data from the API's

// useEffect will execute when component is mount and also when state will be changed again useEffect will be executed

// useEffect will executed when we are change something only in that case we are given dependency