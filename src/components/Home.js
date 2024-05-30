import React from 'react'
import { useNavigate } from "react-router-dom"
//Above the line to import hook from the react router dom this is use to navigate to one page to an other page by using button etc.

const Home = () => {

    const navigate = useNavigate()

    const navigateToSuccessPage = () => {
        navigate("/success")
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={navigateToSuccessPage}>Submit form</button>
        </div>
    )
}

export default Home;