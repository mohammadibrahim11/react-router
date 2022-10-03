import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import Header from '../Header/Header';
import Photo from '../Photo/Photo';


const Product = () => {
    const product = useLoaderData();
    return (
        <div>
     
           <h1>this is for product:{product.length}</h1>
           {
            product.map((p)=> <Photo key={p.id} p={p}></Photo>)
           }
        </div>
    );
};

export default Product;