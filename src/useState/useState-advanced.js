import React, { useState } from 'react'

const Index = () => {

    const initialObj = {
        firstName: "Phanindra",
        lastName: "Nidamanuri",
        age: 26
    };

    const [data, setData] = useState(initialObj);

    const changeFirstName = () => {
        setData({
            ...data,//This is called spreed operator 
            firstName: "srinu"
        });
    };

    const changeLastName = () => {
        setData({
            ...data,
            lastName: "Emani"
        });

    };

    return (
        <div>
            <h1>My name is {data.firstName}</h1>
            <button onClick={changeFirstName}> Change First Name</button>
            <h1>My surname is {data.lastName}</h1>
            <button onClick={changeLastName}>Change Last Name </button>
            <h1>Age {data.age}</h1>
        </div>
    );
};

export default Index;