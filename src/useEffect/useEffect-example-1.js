import React, { useEffect, useState } from 'react'

const URL = "https://jsonplaceholder.typicode.com/users"

const Index = () => {

    const [userData, setUserData] = useState([]);

    const [loading, setLoading] = useState(false);

    const [isError, setIsError] = useState({ status: false, msg: "" });

    const fetchUserData = async (apiURL) => {

        setLoading(true);

        setIsError({ status: false, msg: "" })

        try {
            const response = await fetch(apiURL);

            const data = await response.json();

            setUserData(data);

            setLoading(false);

            setIsError({ status: false, msg: "" })

            if (response.status === 404) {
                throw new Error("data not found");
            }

        } catch (error) {
            setLoading(false);

            setIsError({ status: true, msg: error.message || "something went wrong, pls try again!" })
        }
    };

    useEffect(() => {
        fetchUserData(URL)
    }, []);

    if (loading) {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        )
    };

    if (isError?.status) {
        // This is optional chaining
        return (
            <div>
                <h3 style={{ color: "red" }}>{isError?.msg}</h3>
            </div>
        )
    };


    return (
        <div>
            <h1>useEffect example</h1>
            <ul>
                {
                    userData.map((eachUser) => {

                        const { id, name, email } = eachUser;

                        return (
                            <li key={id}>
                                <div>{name}</div>
                                <div>{email}</div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default Index;