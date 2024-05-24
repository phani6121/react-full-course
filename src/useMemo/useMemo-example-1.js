// useMemo is used to control the performance of the code in multiple functions and state situation.


import React, { useState, useMemo, useEffect } from 'react'

const Index = () => {

    const [number, setNumber] = useState(0);

    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);



    const themeChange = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        }

    }, [dark])

    useEffect(() => {

        console.log("theme changed");

    }, [themeChange]);

    return (
        <>
            <div>
                <input type="number" name='number' id='number' value={number} onChange={(e) => setNumber(Number(e.target.value))} />
            </div>
            <br />
            <div>
                <button onClick={() => setDark(!dark)}>change theme</button>
            </div>
            <h2 style={themeChange}>The Number:{doubleNumber}</h2>

        </>
    )
}

const slowFunction = (number) => {
    for (let index = 0; index < 100000000; index++) { }

    console.log("slow running");

    return number * 2
}

export default Index
