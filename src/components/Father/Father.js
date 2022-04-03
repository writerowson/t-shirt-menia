import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../MYself/Myself';
import Sister from '../Sister/Sister';

const Father = ({ house, ornament }) => {
    return (
        <div>
            <h2>father</h2>
            <p>House: {house}</p>
            <Myself house={house} ornament={ornament}></Myself>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
        </div>
    );
};

export default Father;