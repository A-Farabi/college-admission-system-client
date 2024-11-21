import React from "react";

const SignUp = ({ toggleToLogin }) => {

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target

        const fullName = form.fullName.value
        const email = form.email.value
        const password = form.password.value
        const photourl = form.photourl.value

    }

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Photo Url</label>
                    <input
                        type="text"
                        name="photourl"
                        placeholder="Create a password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
                >
                    Sign Up
                </button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
                Already have an account?{" "}
                <button onClick={toggleToLogin} className="text-yellow-500 hover:underline">
                    Login
                </button>
            </p>
        </div>
    );
};

export default SignUp;
