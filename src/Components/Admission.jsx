import React, { useState } from "react";
import Login from "./AuthComponent/Login";
import SignUp from "./AuthComponent/SignUp";


const Admission = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleToSignup = () => setIsLogin(false);
    const toggleToLogin = () => setIsLogin(true);

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            {isLogin ? (
                <Login toggleToSignup={toggleToSignup} />
            ) : (
                <SignUp toggleToLogin={toggleToLogin} />
            )}
        </div>
    );
};

export default Admission;
