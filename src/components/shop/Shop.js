import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([]);

    const [cart,setCart]=useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    },[])

    const handleAddToCart=(book)=>{
        const itemFound=cart.find((item)=>item.id===book.id);
        // console.log(itemFound);
        let newArray=[];
        
        if(itemFound){
            alert('Product Already exist');
        }
        else if(!itemFound && cart.length<4){
            newArray=[...cart,book];
            setCart(newArray);
        }
        else if(cart.length>=4){
            alert('Products are many and more');
        }
        // console.log('clicked');
        

    }

    const handleReset=()=>{
        let newCart=[];
        setCart(newCart);
    }

    return (
        <div>
            <div className="row product-container">
                <div className=" col col-md-9 col-xxl-9 col-xl-9 col-lg-9 Book_items">
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
                <div className="col col-md-3 col-xxl-3 col-xl-3 col-lg-3 cart_container">
                    <Cart cart={cart} handleReset={handleReset}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;