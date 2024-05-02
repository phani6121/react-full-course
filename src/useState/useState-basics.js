import React, { useState } from "react";

//useState is used to store the some values

const Index = () => {
    //At here we are make the array destructuring
    const [count, setCount] = useState(0);

    //This only increment and decrement only one number
    // const incrementCount = () => {
    //     setCount(count + 1);
    // }
    // const decrementCount = () => {
    //     setCount(count - 1);
    // };


    // This is for increment and decrement two count of numbers
    const incrementCount = () => {
        setCount((prevCount) => {
            return prevCount + 2
        });

        // setCount((prevCount) => {
        //     return prevCount + 1
        // });
        setCount((prevCount) => prevCount + 1)

    };
    const decrementCount = () => {
        setCount((prevCount) => {
            return prevCount - 2
        });

        // setCount((prevCount) => {
        //     return prevCount - 1
        // });
        setCount((prevCount) => prevCount - 1)

    };

    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    );
};

// export default Index;




