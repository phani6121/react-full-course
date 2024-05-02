import React, { useState } from 'react'

const Index = () => {

    const [firstName, setFirstName] = useState("srinu");
    const [lastName, setLastName] = useState("Emani");
    const [age, setAge] = useState(40);


    const changeFirstName = () => {
        setFirstName("Phanindra")
    };

    const changeLastName = () => {
        setLastName("Nidamanuri")
    };

    const changeAge = () => {
        setAge(26)
    };


    return (
        <div>
            <h1>My name is {firstName}</h1>
            <button onClick={changeFirstName}> Change First Name</button>
            <h1>My surname is {lastName}</h1>
            <button onClick={changeLastName}>Change Last Name </button>
            <h1 >Age: {age}</h1>
            <button onClick={changeAge}>change Age </button>
        </div>
    );
};

export default Index;