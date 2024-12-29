import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './Navbar';
import Skeleton from './Skeleton';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {


    const [singleData,setSingleData] = useState(null);

    const params = useParams();


    const fetchData = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
        const resData = await data.json();
        setSingleData(resData);
    }

    useEffect(()=>{
        fetchData();
    },[])

    if(singleData === null){
        return <Skeleton/>
    }

    const {category,image,title,description,price} = singleData;

  return(
    <>
        <div>
            <Navbar/>
            <div className='card'>
                <h1>{category}.</h1>
                <img className='img' src={image} alt="" />
                <h3>{title}</h3>
                <h3>{description}</h3>
                <h3>{price}</h3>
            </div>
        </div>
    </>
  )
}

export default ProductDetails