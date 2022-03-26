import React, { useState } from 'react';
import SelectedCart from '../SelectedCart/SelectedCart';

const Cart = ({cart,handleReset}) => {
    // console.log(cart);

    const [choose,setChoose]=useState([]);

    const chooseOne=(cart)=>{
        let randomChoose = cart[Math.floor(Math.random()*cart.length)];
        setChoose(randomChoose);
    }
    // console.log(choose);
    return (
        <div>
        {
            <div className="cart_info">
            <h3>Selected Items: {cart.length}</h3>
                <div className="cart_details">
                {
                    cart.map((item)=> <SelectedCart
                        key={item.id}
                        cartInfo={item}
                    ></SelectedCart>)
                }
                </div>
                <div className="choose_btn">
                    <button onClick={()=>chooseOne(cart)}>CHOOSE 1 FOR ME</button>
                </div>
                <div className="Reset_btn">
                    <button onClick={handleReset}>CHOOSE AGAIN</button>
                </div>
                {
                    choose?<p>{choose.name}</p>:''
                }
                
            </div>
        }
        </div>
    );
};

export default Cart;