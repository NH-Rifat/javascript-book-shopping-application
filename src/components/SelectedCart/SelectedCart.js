import React from 'react';

const SelectedCart = ({cartInfo}) => {
    // console.log(cartInfo);
    const {img,name}=cartInfo;
    // console.log(name);
    return (
        <div>
            
            <h5>{name}</h5>
        </div>
    );
};

export default SelectedCart;