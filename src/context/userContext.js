import React from 'react'

const initialState = {
    firstName: "Phanindra",
    lastName: "Nidamanuri",
    email: "phanindra@gamil.com"
}

export const UserContext = React.createContext();
//This is the create a context method.

export const UserContextProvider = ({ children }) => {
    //Here we are pass the app.js to provider "children"
    return <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
}
//This is the provider it is pass the data  

