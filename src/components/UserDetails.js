import React from 'react'
import { useParams } from "react-router-dom"
// In useParams to use to get id of the users 
import userData from './userData'

const UserDetails = () => {

    const { userId } = useParams()

    const userDetailsData = userData.find((eachUser) => {
        return eachUser.id == userId
    })

    return (
        <div>
            <h1>User Details</h1>
            <h2>{userDetailsData.name}</h2>
            <h3>{userDetailsData.username}</h3>
            <h3>{userDetailsData.email}</h3>
            <p>{userDetailsData.phone}</p>

        </div>
    )
}

export default UserDetails;
