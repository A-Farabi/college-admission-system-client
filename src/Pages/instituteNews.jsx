import React, { useEffect, useState } from "react";

const InstituteNews = () => {
    const [newsData, setNewsData] = useState([]);
    const [sortedNews, setSortedNews] = useState([]);
    const [isSorted, setIsSorted] = useState(false);

    // Fetching data from JSON file
    useEffect(() => {
        fetch("newsData.json")
            .then((res) => res.json())
            .then((data) => {
                setNewsData(data);
                setSortedNews(data); // Default view
            })
            .catch((error) => console.error("Error loading news data:", error));
    }, []);

    // Sorting news by date (latest first)
    const handleSortByDate = () => {
        const sorted = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortedNews(sorted);
        setIsSorted(true);
    };

    // Pagination state
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sortedNews.length);
    };

    const handlePrevious = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + sortedNews.length) % sortedNews.length
        );
    };

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Institute News
                </h2>

                {/* Sort Button */}
                <div className="flex justify-center mb-6">
                    <button
                        onClick={handleSortByDate}
                        className="px-6 py-2 bg-yellow-500 text-black rounded-lg shadow hover:bg-yellow-600 transition duration-300"
                    >
                        Sort by Latest Date
                    </button>
                </div>

                <div className="relative flex justify-center items-center">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 px-4 py-2 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
                    >
                        &#8592; Prev
                    </button>

                    {/* News Card */}
                    <div className="w-full lg:w-[80%] p-6">
                        {sortedNews.length > 0 ? (
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src={sortedNews[currentIndex].image}
                                    alt={sortedNews[currentIndex].title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex justify-center">
                                        <span className="px-3 py-1 text-sm text-white bg-green-500 rounded-full">
                                            {sortedNews[currentIndex].category}
                                        </span>
                                    </div>
                                    <h3 className="mt-4 text-2xl font-bold text-gray-800">
                                        {sortedNews[currentIndex].title}
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        {sortedNews[currentIndex].description}
                                    </p>
                                    <div className="flex justify-between items-center mt-4 text-gray-500">
                                        <span>{sortedNews[currentIndex].date}</span>
                                        <span>{sortedNews[currentIndex].comments}</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">Loading news...</p>
                        )}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 px-4 py-2 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
                    >
                        Next &#8594;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InstituteNews;
