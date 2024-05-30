import React from 'react'
import { Link, Outlet } from "react-router-dom"

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <nav>
                <Link to="/Projects/feature">Featured Projects </Link>
                <Link to="/Projects/new">New Projects </Link>
            </nav>
            <Outlet />
            {/* At here outlet component used to data displayed for nested routes  */}

        </div>
    )
}

export default Projects
