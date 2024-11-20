import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='font-poppins max-w-[90%]  mx-auto'>
            <div className='mt-5'>
                <Navbar></Navbar>
            </div>
            <Home></Home>
            <div className='mt-20'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;