//useReducer is  used to complex of state management 

import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if (action.type === "DELETE_PERSON") {
        const newPersons = state.data.filter((eachPerson) => {
            return eachPerson.id !== action.payload;
        });
        return {
            ...state,
            data: newPersons,
            length: state.length - 1,

        };
    };
    return state;
};

const Index = () => {

    const initialState = {
        data: [
            { id: "1", firstName: "Phanindra", email: "phanindra@gmail.com" },
            { id: "2", firstName: "srinu", email: "srinu@gmail.com" },
        ],
        length: 2,
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    //reducer is modification of the state 

    const handleDelete = (id) => {
        //dispatch is modified the data 
        //dispatch is internally connect to reducer
        dispatch({
            type: "DELETE_PERSON",
            payload: id,
        });
    };

    const handleEdit = (id) => {
        dispatch({
            type: "UPDATE_PERSON",
            payload: id
        });
    };

    return (
        <div>
            <h1>Current users length : {state.length}</h1>
            {state.data.map((eachItem) => {
                const { id, firstName, email } = eachItem;
                return (
                    <div key={id}>
                        <h3>{firstName}</h3>
                        <p>{email}</p>
                        <button onClick={() => handleDelete(id)}>delete</button>
                        <button onClick={() => handleEdit(id)}>Edit</button>
                    </div>
                );
            })};
        </div>
    );
};

export default Index
