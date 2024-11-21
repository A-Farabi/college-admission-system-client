import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* daiseui navbar */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 text-start">
                            <NavLink to={"/"} className={({ isActive }) =>
                                `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${isActive ? 'scale-95 bg-[#E5B300]' : 'bg-gray-900 text-white'}`
                            }>Home</NavLink>
                            <NavLink to={"/course"} className={({ isActive }) =>
                                `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out mt-2  focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${isActive ? 'scale-95 bg-[#E5B300]' : 'bg-gray-900 text-white'}`
                            }>Course</NavLink>
                            <NavLink to={"/facultynstuff"} className={({ isActive }) =>
                                `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out mt-2  focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${isActive ? 'scale-95 bg-[#E5B300]' : 'bg-gray-900 text-white'}`
                            }>Faculty & Stuff</NavLink>
                            <NavLink to={"/eventnnews"} className={({ isActive }) =>
                                `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out mt-2 mb-2  focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${isActive ? 'scale-95 bg-[#E5B300]' : 'bg-gray-900 text-white'}`
                            }>Event & News</NavLink>
                            <NavLink to={"/contactus"} className={({ isActive }) =>
                                `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${isActive ? 'scale-95 bg-[#E5B300]' : 'bg-gray-900 text-white'}`
                            }>Contact Us</NavLink>
                        </ul>
                    </div>
                    <Link to={"/"} className="text-2xl font-bold text-[#36384E]">Headway Engineering Ins.</Link >
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to={"/"} className={({ isActive }) =>
                            `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out mr-3 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${isActive ? 'scale-95 bg-[#E5B300]' : 'bg-gray-900 text-white'}`
                        }>Home</NavLink>
                        <NavLink to={"/course"} className={({ isActive }) =>
                            `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out mr-3 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${isActive ? 'scale-95 bg-[#E5B300]' : 'bg-gray-900 text-white'}`
                        }>Course</NavLink>
                        <NavLink to={"/facultynstuff"} className={({ isActive }) =>
                            `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out mr-3 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${isActive ? 'scale-95 bg-[#E5B300]' : 'bg-gray-900 text-white'}`
                        }>Faculty & Stuff</NavLink>
                        <NavLink to={"/contactus"} className={({ isActive }) =>
                            `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${isActive ? 'scale-95 bg-[#E5B300]' : 'bg-gray-900 text-white'}`
                        }>Contact Us</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='btn bg-[#E5B300] rounded-none' to={"/admission"}>Admission</Link>
                </div>
            </div>
            {/* daiseui navbar */}
        </div>
    );
};

export default Navbar;