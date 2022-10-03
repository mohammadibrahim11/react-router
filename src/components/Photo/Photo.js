import React from 'react';
import { Link } from 'react-router-dom';

const Photo = ({p}) => {
    console.log(p)
    const {name,address,id} = p;
    return (
        <div>
            <p>name:{name}</p>
            <p>street:{address.street}</p>
            <p>city:<Link to={`/product/${id}`}>{address.city}</Link></p>

        
        </div>
    );
};

export default Photo;