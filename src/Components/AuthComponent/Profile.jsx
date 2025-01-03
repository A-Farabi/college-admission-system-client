import React, { useContext } from 'react';
import { AuthContext } from '../AuthComponent/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user, logOut } = useContext(AuthContext);

    if (!user) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <h1 className="text-3xl font-bold text-gray-700">No user data found. Please log in.</h1>
            </div>
        );
    }

    return (
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8 mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">Your Profile</h2>

            <div className="flex flex-col items-center space-y-4">
                {/* Profile Picture */}
                {user.photoURL ? (
                    <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-2 border-yellow-500"
                    />
                ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-gray-600">
                        {user.displayName?.charAt(0).toUpperCase() || "U"}
                    </div>
                )}

                {/* User Information */}
                <div className="w-full space-y-2">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-gray-700">Full Name:</p>
                        <p className="text-lg text-gray-900">{user.displayName || "Not provided"}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-gray-700">Email:</p>
                        <p className="text-lg text-gray-900">{user.email || "Not provided"}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-gray-700">Phone:</p>
                        <p className="text-lg text-gray-900">{user.phoneNumber || "Not provided"}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-gray-700">Email Verified:</p>
                        <p className="text-lg text-gray-900">
                            {user.emailVerified ? "Yes" : "Not verified"}
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-gray-700">Account Created:</p>
                        <p className="text-lg text-gray-900">
                            {user.metadata?.creationTime || "Unknown"}
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-gray-700">Last Sign-in:</p>
                        <p className="text-lg text-gray-900">
                            {user.metadata?.lastSignInTime || "Unknown"}
                        </p>
                    </div>
                </div>

                {/* Logout Button */}
                <Link to={"/coursernroll"}><button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition mt-4"
                >
                    Enroll Course
                </button></Link>
                <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition mt-4"
                    onClick={logOut}
                >
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Profile;
