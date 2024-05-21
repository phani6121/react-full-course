// In large projects there are number of components so we can pass the state parent component to last child component go through one by one not possible to pass the last child so we can use the useContext to pass the state to direct last child.

//Actual structure is in react app number of components are we wrote so state will be pass one by one to last child in that process we don't need to pass the state remaining child to avoid that process in useContext

//In useContext structure context inside react app so that state will be pass to direct to any child components

// Those problems are called props drilling so we are used useContext to solve the props drilling problem.


import React, { useState } from 'react'

const ParentComponent = () => {

    const [userDetails, setUserDetails] = useState({
        firstName: "Phanindra",
        lastName: "Nidamanuri",
        email: "phani@gamil.com"
    })

    return (
        <div>useContext Parent Component
            <ChildComponent userDetails={userDetails} />
        </div>
    )
}

const ChildComponent = (props) => {
    return (
        <div>
            <h2>Child Component</h2>
            <SubChildComponent userDetails={props.userDetails} />
        </div>
    )
}

const SubChildComponent = ({ userDetails }) => {
    return (
        <div>
            <h3>Sub Child Component</h3>
            <div>firstName:{userDetails.firstName}</div>
            <div>lastName:{userDetails.lastName}</div>
            <div>Email:{userDetails.email}</div>
        </div>
    )
}


export default ParentComponent;

