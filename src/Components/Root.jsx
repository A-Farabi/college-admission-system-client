import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

const Root = () => {
    return (
        <div className='font-poppins max-w-[90%]  mx-auto'>
            <Navbar></Navbar>
            <Home></Home>
        </div>
    );
};

export default Root;