import React, { useState } from 'react'

const Index = () => {
    const initialArray = [
        {
            id: 1,
            firstName: "srinu",
            lastName: "Emani",
            age: 40
        },
        {
            id: 2,
            firstName: "Phanindra",
            lastName: "Nidamanuri",
            age: 26
        }
    ];

    const [data, setData] = useState(initialArray);

    const handleDelete = (comingId) => {
        const filterData = data.filter((eachItem) => {
            return eachItem.id !== comingId;
        });
        setData(filterData);
    }


    return (
        <div>
            <ul>
                {data.map((eachItem, index) => {
                    const { firstName, lastName, age, id } = eachItem;
                    return (
                        <li key={index}>
                            <div>
                                My firstName <strong>{firstName}</strong>
                            </div>
                            <div>
                                My lastName <strong>{lastName}</strong>
                            </div>
                            <div>
                                My age <strong>{age}</strong>
                            </div>
                            <button onClick={() => handleDelete(id)}>delete me </button>
                        </li>
                    );
                })};
            </ul>
        </div>
    );
};

export default Index;