// In this component users data displayed on the Users 

import React from 'react'
import userData from "./userData"
import { Link } from "react-router-dom"

const Users = () => {
    return (
        <div>
            <h1>Users</h1>
            <div className='card-container'>
                {userData.map((eachUser) => {
                    const { id, name, email } = eachUser;
                    return (
                        <Link to={`/users/${id}`} key={id}>
                            <article className='card'>
                                <h3>{name}</h3>
                                <h5>{email}</h5>
                            </article>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Users;
