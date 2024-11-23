import campus1 from '../../public/assets/campus/campus1.jpg'
import campus2 from '../../public/assets/campus/campus2.jpg'
import campus3 from '../../public/assets/campus/campus3.jpg'
import campus4 from '../../public/assets/campus/campus4.jpg'


const AboutUs = () => {
    return (
        // <section className="bg-gray-100 py-16">
        //     <div className="container mx-auto px-6 md:px-12 lg:px-20">
        //         <div className="flex flex-col lg:flex-row items-center gap-10">
        //             {/* Image Section */}
        //             <div className="lg:w-1/2">
        //                 <img
        //                     src="https://via.placeholder.com/500" // Replace with your image URL
        //                     alt="About Us"
        //                     className="rounded-lg shadow-lg"
        //                 />
        //             </div>

        //             {/* Text Section */}
        //             <div className="lg:w-1/2 space-y-6">
        //                 <h2 className="text-4xl font-bold text-gray-800">
        //                     About <span className="text-yellow-500">Headway Engineering Institute</span>
        //                 </h2>
        //                 <p className="text-gray-600 text-lg">
        //                     At Headway Engineering Institute, we are committed to providing exceptional education and
        //                     fostering a culture of innovation. With state-of-the-art facilities and a dedicated faculty,
        //                     we empower students to achieve their dreams and excel in their careers.
        //                 </p>
        //                 <p className="text-gray-600 text-lg">
        //                     Our mission is to create a learning environment that nurtures creativity, critical thinking,
        //                     and technical expertise, preparing students to become leaders in their respective fields.
        //                 </p>
        //                 <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition duration-300">
        //                     Learn More
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section className="bg-gray-50 py-16 mt-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Images Section */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-6">
                        <img
                            src={campus1}
                            alt="Campus View"
                            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full object-cover"
                        />
                        <img
                            src={campus2}
                            alt="Classroom"
                            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full object-cover"
                        />
                        <img
                            src={campus3}
                            alt="Lab Session"
                            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full object-cover"
                        />
                        <img
                            src={campus4}
                            alt="Student Activity"
                            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full object-cover"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-800">
                            About <span className="text-yellow-500">Headway Engineering Institute</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            At Headway Engineering Institute, we believe in fostering a dynamic learning environment
                            where students are equipped with the skills and knowledge to thrive in the real world.
                        </p>
                        <p className="text-gray-600 text-lg">
                            Our state-of-the-art facilities, experienced faculty, and inclusive culture empower students
                            to explore their potential and achieve greatness.
                        </p>
                        <button className="px-6 py-3 bg-yellow-500 text-black font-medium rounded-lg shadow hover:bg-yellow-500 transition duration-300">
                            Discover More
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AboutUs;
