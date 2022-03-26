import React from 'react';
import './SelectedCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const SelectedCart = ({cartInfo}) => {
    // console.log(cartInfo);
    const {img,name}=cartInfo;
    // console.log(name);
    return (
        <div className='item_container'>
            <div className="img_name">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="name">
                    <p>{name}</p>
                </div>
            </div>
            <div className="delete_btn">
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default SelectedCart;