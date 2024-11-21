import React from "react";

const Login = ({ toggleToSignup }) => {

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target

        const email = form.email.value
        const password = form.password.value

    }

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
                >
                    Login
                </button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
                Don't have an account?{" "}
                <button onClick={toggleToSignup} className="text-yellow-500 hover:underline">
                    Sign Up
                </button>
            </p>
        </div>
    );
};

export default Login;
