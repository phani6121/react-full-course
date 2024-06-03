import React from 'react'
import { useAuth } from './auth'
import { NavLink } from "react-router-dom"
// import { Link } from "react-router-dom"

// At here there is difference between Link and NavLink when ever we are using Link we do not know where i am like pages Home,About But NavLink is different it is automatically add active class to given based on the we given pages like home about or contact 

const Navbar = () => {

    const { user, logout } = useAuth();

    //This is like inline styling 
    const navLinkStyle = ({ isActive }) => {
        return {
            textDecoration: isActive ? "none" : "underline",
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "black" : "blue"
        }
    }
    return (
        <div>
            <nav className='primary-nav'>
                <NavLink style={navLinkStyle} to="/" >Home</NavLink>
                <NavLink style={navLinkStyle} to="/About">About</NavLink>
                <NavLink style={navLinkStyle} to="/Contact">Contact</NavLink>
                <NavLink style={navLinkStyle} to="/Projects">Projects</NavLink>
                <NavLink style={navLinkStyle} to="/users">Users</NavLink>
                {/* <Link to="/" >Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link> */}
                {user ? (
                    <NavLink style={navLinkStyle} to="/logout" onClick={logout}>Logout</NavLink>
                ) : (
                    <NavLink style={navLinkStyle} to="/login">Login</NavLink>
                )}
            </nav>
        </div>
    )
}

export default Navbar;