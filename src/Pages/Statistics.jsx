import React, { useState, useEffect } from "react";

const Statistics = () => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fetch data from the JSON file using useEffect
    useEffect(() => {
        // Assuming your JSON file is named 'extraordinaryData.json' and is in the public folder
        fetch('/statistics.json')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // Handle slider next and previous functionality
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrevious = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + data.length) % data.length
        );
    };

    // If data is still loading, display a loading message
    if (data.length === 0) {
        return <div className="text-center py-16 text-xl">Loading...</div>;
    }

    return (
        <section className="bg-gray-50 py-8 mt-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-0">
                <div className="w-[60%] mx-auto text-center  p-5 rounded-lg">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                        <span className="text-yellow-500">Extraordinary Achivement Statistics</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-5">
                        Discover the remarkable statistics that highlight the success and growth of Invent College. From high graduation rates to a diverse student body, these achievements reflect our commitment to excellence and innovation.
                    </p>
                </div>

                {/* Responsive Grid for Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
                    {data.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-4xl font-bold text-blue-500 mb-4">
                                {item.value}
                            </p>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
