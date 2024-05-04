import React, { useState } from 'react'

const Index = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
    };

    return (
        <div className='log-in'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-content'>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name='firstName' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className='form-content'>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name='lastName' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className='form-content'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-content'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='form-button'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Index;