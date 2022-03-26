import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../cart/Cart';

const Shop = () => {
    const [products,setProducts]=useState([]);

    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    },[])

    const handleAddToCart=(book)=>{
        // console.log('clicked');
        let newArray=[...cart,book];
        setCart(newArray);

    }
    return (
        <div>
            <div className="row product-container">
                <div className=" col col-md-9 col-xxl-9 col-xl-9 col-lg-9">
                    <div className="row g-5">
                        {
                            products.map((product)=><Book 
                            key={product.id}
                            book={product}
                            handleAddToCart={handleAddToCart}
                            ></Book>)
                        }
                    </div>

                </div>
                <div className="col col-md-3 col-xxl-3 col-xl-3 col-lg-3 border border-warning cart_container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;