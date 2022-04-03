import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [house, setHouse] = useContext(RingContext)
    const handleHouseRise = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }

    return (
        <div>
            <h2>Uncle</h2>
            <p>House:{house}</p>
            <button onClick={handleHouseRise}>Uncle house gain</button>
        </div>
    );
};
export default Uncle;