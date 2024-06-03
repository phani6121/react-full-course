import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

const Login = () => {

    const navigate = useNavigate();

    const { login } = useAuth()

    const [name, setName] = useState("");

    return (
        <div>
            <h1>Login</h1>
            <label>Username</label>
            <input type="text" name='name' id='name' value={name} placeholder='enter username' onChange={(e) => setName(e.target.value)} />
            <button onClick={() => {
                login(name)
                navigate("/", { replace: true })
                // At here replace prop if we are login to login page after we click the arrow through navigate to back to stop the again login page 
            }}>login</button>
        </div>
    )
}

export default Login;
