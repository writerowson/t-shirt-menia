import React, { useState } from 'react';
import useTShirts from '../../hooks/UseTshirts';
import Cart from '../Cart/Cart'
import Tshirt from '../Tshirt/Tshirt';

import './Home.css'


const Home = () => {
    const [tSirts, setTshirts] = useTShirts([])
    const [cart, setCart] = useState([])

    const handleAddtoCart = (selectedItem) => {
        const exists = cart.find(tSirts => tSirts._id === selectedItem._id)
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart)
        }
        else {
            alert('Item already added')
        }
    }

    const removeFromCart = (selectedItem) => {
        const rest = cart.filter(tSirts => tSirts._id !== selectedItem._id)
        setCart(rest)
    }


    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {tSirts.map(tshirt => <Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleAddtoCart={handleAddtoCart}
                ></Tshirt>)}
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    removeFromCart={removeFromCart}
                ></Cart>
            </div>

        </div>
    );
};

export default Home;