import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Shop = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    },[])
    return (
        <div>
            <div className="product-container">
                <div className="row">
                    <div className="col col-md-9 col-xxl-9 col-xl-9 col-lg-9 border border-warning">
                        {
                            products.map((product)=><Book 
                            key={product.id}
                            Books={product}
                            ></Book>)
                        }
                        
                    </div>
                    <div className="col col-md-3 col-xxl-3 col-xl-3 col-lg-3 border border-warning">
                        <h1>Hello this is product</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;