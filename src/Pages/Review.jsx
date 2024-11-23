import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from JSON
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="bg-gray-50 py-16 mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">
          What People Say About Us
        </h2>
        <Marquee>
          <div className="flex justify-center gap-6 ml-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 space-y-4 border-t-4 border-yellow-500 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-14 h-14 rounded-full border-2 border-yellow-500"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.comment}"</p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`${i < review.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                        } text-lg`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Review;
