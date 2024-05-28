import React, { useState, useEffect } from 'react'

import useFetch from './useFetch'

const URL = "https://jsonplaceholder.typicode.com/posts"

const SecondApi = () => {

    const [postsData, loading, isError] = useFetch(URL)



    if (isError) {
        return <h3>something went wrong</h3>
    }

    if (loading) {
        return <h3>Loading....</h3>
    }




    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {postsData.map((eachUser) => {
                    return <li key={eachUser.id}>
                        {eachUser.title}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default SecondApi;

