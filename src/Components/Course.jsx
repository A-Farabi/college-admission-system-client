import React, { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from a JSON file
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Explore Our Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600">{course.description}</p>
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
