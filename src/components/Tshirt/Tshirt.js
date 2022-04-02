import React from 'react';
import './Tshirt.css'
const Tshirt = ({ handleAddtoCart, tshirt }) => {

    const { name, price, picture } = tshirt

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddtoCart(tshirt)}>Add to cart</button>
        </div>
    );
};

export default Tshirt;
