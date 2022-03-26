import React from 'react';
import './Book.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Book = ({book,handleAddToCart}) => {
    // console.log(Books);
    const {name,price,ratings,img,quantity,stock}=book;
    // console.log(name,price,ratings,img,quantity,stock);
    return (
        <div className='col col-xxl-4 col-xl-4 col-md-6 col-lg-4'>
            <div className="card h-100">
                <div className="img text-center p-4">
                    <img  src={img} className="card-img-top book_img" alt="..."></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer text-center">
                    <button onClick={()=>handleAddToCart(book)}>ADD TO CART <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                    
                </div>
            </div>
        </div>
    );
};

export default Book;
