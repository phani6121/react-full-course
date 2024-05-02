import React, { useState } from 'react'

const Index = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (e, name) => {
        console.log(e.target.value, name);
        if (name === "firstName") {
            setFirstName(e.target.value)
        } else if (name === "lastName") {
            setLastName(e.target.value)
        } else if (name === "eamil") {
            setEmail(e.target.value)
        } else if (name === "password") {
            setPassword(e.target.value)
        }
    };


    // This is for button event 
    const handleSubmit = (e) => {
        e.preventDefault();
        let userObj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        console.log(userObj);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-content'>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name='firstName' id='firstName' placeholder='enter first name' value={firstName} onChange={(e) => handleInputChange(e, "firstName")} />
                </div>
                {/* At here value is to connect to state and input */}
                <div className='form-content'>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name='lastName' id='lastName' placeholder='enter last name' value={lastName} onChange={(e) => handleInputChange(e, "lastName")} />
                </div>
                <div className='form-content'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' placeholder='enter email' value={email} onChange={(e) => handleInputChange(e, "email")} />
                </div>
                <div className='form-content'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' placeholder='enter password' value={password} onChange={(e) => handleInputChange(e, "password")} />
                </div>
                <div className='form-button'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Index;