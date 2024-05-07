import React, { useEffect, useState } from 'react'

const Index = () => {

    const [count, setCount] = useState(0);

    const [pageWidth, setPageWidth] = useState(window.innerWidth);

    useEffect(() => {

        const reSizeHandler = () => {
            setPageWidth(window.innerWidth);
        };

        window.addEventListener("resize", reSizeHandler);
        console.log("hello i am coming from useEffect", count);

        return () => {
            console.log("i am removing");
            window.removeEventListener("reSize", reSizeHandler);
        };
    });

    return (
        <div>
            <h1>Learn useEffect</h1>
            <h1>{pageWidth}</h1>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>+</button>
        </div>
    )
};

export default Index;
// useEffect first argument is call back function , second argument is dependency it is like array [], Third argument we are given dependencies in array single or multiple, fourth argument create events and when events executed it will be mounted in that time event data will be number of time stored so application will be slow for that we will be removing that data before event executed.

// useEffect main use to bring data from the API's
// useEffect will execute when component is mount and also when state will be changed again useEffect will be executed
// useEffect will executed when we are change something only in that case we are given dependency