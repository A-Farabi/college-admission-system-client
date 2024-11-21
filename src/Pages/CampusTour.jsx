import React, { useEffect, useState } from 'react';
import { FaCross } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const CampusTour = () => {
    const [campusImages, setCampusImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // Fetch images data from the JSON file
        fetch('campusimage.json')
            .then((res) => res.json())
            .then((data) => setCampusImages(data));
    }, []);

    const handleExpand = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="bg-gradient-to-b from-gray-50 to-gray-200 py-5 lg:py-16 mt-5 lg:mt-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="lg:w-[60%] mx-auto text-center p-5 rounded-lg">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                        <span className="text-yellow-500">Take a Campus Tour</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Embark on a journey to explore our vibrant campus and discover the spaces that inspire learning, creativity, and community. From state-of-the-art laboratories and dynamic classrooms to serene gardens and lively student activity centers, our campus is designed to foster growth and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {campusImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative group rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300">
                                <div className="flex justify-center items-center h-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-center space-y-4">
                                        <h3 className="text-2xl font-bold">{image.title}</h3>
                                        <p className="text-lg">{image.description}</p>
                                        <button
                                            onClick={() => handleExpand(image.url)}
                                            className="px-6 py-2 bg-yellow-500 text-black rounded-lg shadow hover:bg-yellow-600 transition duration-300"
                                        >
                                            Expand Image
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                        <div className="relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-5 right-5 text-white text-xl font-bold hover:text-gray-300"
                            >
                                <ImCross></ImCross>
                            </button>
                            <img
                                src={selectedImage}
                                alt="Expanded View"
                                className="max-w-full max-h-[65vh] rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CampusTour;
