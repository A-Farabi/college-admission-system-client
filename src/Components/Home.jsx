import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';

const Home = () => {

    const [cardData, setCardData] = useState([])

    console.log(cardData);

    useEffect(() => {
        fetch('/offers.json')
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <div>
                <div>
                    <div className="bg-gray-100 py-10 mt-20">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Offers We Have for You</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20">
                            {cardData.slice(0, 3).map((cardData, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
                                >
                                    <div className="text-4xl mb-4 text-blue-500">{cardData.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{cardData.title}</h3>
                                    <p className="text-gray-600">{cardData.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className='text-center mt-10'>
                            <Link to={"/offers"} className='btn bg-yellow-500'>Show All Offers</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;