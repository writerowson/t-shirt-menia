import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeFromCart }) => {
    // Conditional Rendering
    // 1. Element variable
    // 2. ternary Operator
    // 3. && Operator
    // 4. || Operator
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Hi bye</h5>
            <p>Please buy</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>Please add more</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div>
            <h1>Item Selected {cart.length} </h1>

            {cart.map(tShirt => <p key={tShirt._id}>
                {tShirt.name}
                <button onClick={() => removeFromCart(tShirt)}>X</button>
            </p>)}
            {cart.length === 0 || <p className='orange'>YAY. Buy</p>}

            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ke ki gift diba</p>
            </div>}

            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Clear All</button>}
            {cart.length === 4 && <button className='orange'>Reviwe Order</button>}
        </div>
    );
};

export default Cart;