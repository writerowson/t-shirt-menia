import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';

import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
export const RingContext = createContext(1)


const Grandpa = () => {
    const [house, setHouse] = useState(1)
    const handleBuyHouse = () => {
        const newHouseCount = house + 1
        setHouse(newHouseCount)
    }
    const ornament = "Dimond ring";

    return (
        <RingContext.Provider value={[house, setHouse]} >
            <div className='grandpa' >
                <h1>Grandpa </h1>
                <p  > house:{house} <button onClick={handleBuyHouse}>Buy a House</button></p>

                <div style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>

                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;