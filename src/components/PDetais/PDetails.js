import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PDetails = () => {
    // console.log(params)
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <p>
                friends details{data.id}
            </p>
            <h1>details posst</h1>
        </div>
    );
};

export default PDetails;