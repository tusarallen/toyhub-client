import React from 'react';
import useTitle from '../../hook/useTitle';

const MyToys = () => {
    useTitle("My Toys");
    
    return (
        <div>
            <h2>My Toys here</h2>
        </div>
    );
};

export default MyToys;