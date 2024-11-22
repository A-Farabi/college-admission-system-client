import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthComponent/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user);

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
                    <Link to={"/"} className="text-2xl font-bold text-[#36384E] hidden lg:block">Headway Engineering Ins.</Link >
                    <Link to={"/"} className="text-2xl font-bold text-[#36384E] block lg:hidden">HEI</Link >
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
                    {user ? (
                        <div>
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="User Avatar"
                                            src={user.photoURL || "https://i.ibb.co.com/WGSVB77/user.webp"}
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-start"
                                >
                                    <li className="text-gray-700 text-sm font-semibold">
                                        <span>Name: {user.displayName || "N/A"}</span>
                                    </li>
                                    <li className="text-gray-700 text-sm font-semibold">
                                        <span>Email: {user.email || "N/A"}</span>
                                    </li>
                                    <li className="text-gray-700 text-sm font-semibold">
                                        <Link to={"/coursernroll"}>Enroll</Link>
                                    </li>
                                    <hr className="my-2 border-gray-300" />
                                    <li>
                                        <button className="btn btn-sm w-full" onClick={logOut}>
                                            Log Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Link className="btn bg-[#E5B300] rounded-none" to={"/admission"}>
                            Admission
                        </Link>
                    )}
                </div>
            </div>
            {/* daiseui navbar */}
        </div>
    );
};

export default Navbar;