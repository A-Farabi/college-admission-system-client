import React from 'react';
import bannerImage from '../../public/assets/student_banner.png'
import bannerImage2 from '../../public/assets/student_banner2.png'
import bannerImage3 from '../../public/assets/student_banner3.png'

const Banner = () => {
    return (
        // <div className='mt-10'>
        //     <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-yellow-50 p-8 lg:p-16">
        //         {/* Left Section */}
        //         <div className="flex-1 space-y-4 text-center lg:text-left">
        //             <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
        //                 Institute <span className="text-yellow-500 font-extrabold lg:text-6xl">For Everyone</span>
        //             </h1>
        //             <div className="text-gray-600 pt-5">
        //                 <div className='text-2xl font-semibold'>"Empowering Tomorrow's Innovators" </div>

        //                 <div className='mt-2 text-[1.1rem]'>
        //                     At Headway Engineering Institute, we shape the future by fostering innovation, excellence, and practical skills in engineering. Join us to build your career with confidence and competence.
        //                 </div>

        //                 <div className='mt-1'>Your Journey to Excellence Begins Here!</div>
        //             </div>
        //             <button className="btn lg:rounded-none px-6 py-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition">
        //                 Push Here
        //             </button>
        //         </div>

        //         {/* Right Section */}
        //         <div className="flex-1 flex justify-center mt-8 lg:mt-0">
        //             <div className="w-72 h-72 lg:h-96  border-gray-300 rounded-lg flex items-center justify-center lg:w-full">
        //                 {/* bg-gray-100 border-dashed border-4 */}
        //                 {/* Replace this div with your image */}
        //                 <img src={bannerImage} alt="BannerImg" className='lg:w-[65%]' />
        //             </div>
        //         </div>
        //     </div>

        // </div>

        <div className="carousel w-full">
            {/* slder 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <div className='mt-10'>
                    <div className=" flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-yellow-50 p-8 lg:p-16">
                        {/* Left Section */}
                        <div className="mx-12 flex-1 space-y-4 text-center lg:text-left">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
                                Institute <span className="text-yellow-500 font-extrabold lg:text-6xl"> 1 For Everyone</span>
                            </h1>
                            <div className="text-gray-600 pt-5">
                                <div className='text-2xl font-semibold'>"Empowering Tomorrow's Innovators" </div>

                                <div className='mt-2 text-[1.1rem]'>
                                    At Headway Engineering Institute, we shape the future by fostering innovation, excellence, and practical skills in engineering. Join us to build your career with confidence and competence.
                                </div>

                                <div className='mt-1'>Your Journey to Excellence Begins Here!</div>
                            </div>
                            <button className="btn lg:rounded-none px-6 py-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition">
                                Push Here
                            </button>
                        </div>

                        {/* Right Section */}
                        <div className="flex-1 flex justify-center mt-8 lg:mt-0">
                            <div className="w-72 h-72 lg:h-96  border-gray-300 rounded-lg flex items-center justify-center lg:w-full">
                                {/* bg-gray-100 border-dashed border-4 */}
                                {/* Replace this div with your image */}
                                <img src={bannerImage} alt="BannerImg" className='lg:w-[65%]' />
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>
            </div>
            {/* slider 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <div className='mt-10'>
                    <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-yellow-50 p-8 lg:p-16">
                        {/* Left Section */}
                        <div className="mx-12 flex-1 space-y-4 text-center lg:text-left">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
                                Institute <span className="text-yellow-500 font-extrabold lg:text-6xl">2 For Everyone</span>
                            </h1>
                            <div className="text-gray-600 pt-5">
                                <div className='text-2xl font-semibold'>"Empowering Tomorrow's Innovators" </div>

                                <div className='mt-2 text-[1.1rem]'>
                                    At Headway Engineering Institute, we shape the future by fostering innovation, excellence, and practical skills in engineering. Join us to build your career with confidence and competence.
                                </div>

                                <div className='mt-1'>Your Journey to Excellence Begins Here!</div>
                            </div>
                            <button className="btn lg:rounded-none px-6 py-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition">
                                Push Here
                            </button>
                        </div>

                        {/* Right Section */}
                        <div className="flex-1 flex justify-center mt-8 lg:mt-0">
                            <div className="w-72 h-72 lg:h-96  border-gray-300 rounded-lg flex items-center justify-center lg:w-full">
                                {/* bg-gray-100 border-dashed border-4 */}
                                {/* Replace this div with your image */}
                                <img src={bannerImage2} alt="BannerImg" className='lg:w-[65%]' />
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>

                </div>
            </div>
            {/* slider 3 */}
            <div id="slide3" className="carousel-item relative w-full">
            <div className='mt-10'>
                    <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-yellow-50 p-8 lg:p-16">
                        {/* Left Section */}
                        <div className="mx-12 flex-1 space-y-4 text-center lg:text-left">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
                                Institute <span className="text-yellow-500 font-extrabold lg:text-6xl">3 For Everyone</span>
                            </h1>
                            <div className="text-gray-600 pt-5">
                                <div className='text-2xl font-semibold'>"Empowering Tomorrow's Innovators" </div>

                                <div className='mt-2 text-[1.1rem]'>
                                    At Headway Engineering Institute, we shape the future by fostering innovation, excellence, and practical skills in engineering. Join us to build your career with confidence and competence.
                                </div>

                                <div className='mt-1'>Your Journey to Excellence Begins Here!</div>
                            </div>
                            <button className="btn lg:rounded-none px-6 py-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition">
                                Push Here
                            </button>
                        </div>

                        {/* Right Section */}
                        <div className="flex-1 flex justify-center mt-8 lg:mt-0">
                            <div className="w-72 h-72 lg:h-96  border-gray-300 rounded-lg flex items-center justify-center lg:w-full">
                                {/* bg-gray-100 border-dashed border-4 */}
                                {/* Replace this div with your image */}
                                <img src={bannerImage3} alt="BannerImg" className='lg:w-[65%]' />
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Banner;