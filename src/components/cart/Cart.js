import React, { useState } from 'react';
import './Cart.css'
import SelectedCart from '../SelectedCart/SelectedCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart,handleReset}) => {
    // console.log(cart);

    const [choose,setChoose]=useState([]);

    const chooseOne=(cart)=>{
        let randomChoose = cart[Math.floor(Math.random()*cart.length)];
        setChoose(randomChoose);
    }

    //!...Convert array to object....
    const cartInfo=Object.assign({},choose);
    // console.log(cartInfo);
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
                <div className="choose_book">
                {
                    (cartInfo.name)?
                        <div className="">
                        <SelectedCart cartInfo={cartInfo}></SelectedCart>
                        </div>
                    :''
                }
                </div>
                <div className="Reset_btn">
                    <button onClick={handleReset}>CHOOSE AGAIN</button>
                </div>
                
                
            </div>
        }
        </div>
    );
};

export default Cart;