import React, { useContext, useState } from "react";
import Login from "./AuthComponent/Login";
import SignUp from "./AuthComponent/SignUp";
import { AuthContext } from "./AuthComponent/AuthProvider";
import Profile from "./AuthComponent/Profile";


const Admission = () => {

    const { user } = useContext(AuthContext)

    const [isLogin, setIsLogin] = useState(true);

    const toggleToSignup = () => setIsLogin(false);
    const toggleToLogin = () => setIsLogin(true);


    return (
        <div>
            {
                user ? <Profile></Profile> : <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                    {isLogin ? (
                        <Login toggleToSignup={toggleToSignup} />
                    ) : (
                        <SignUp toggleToLogin={toggleToLogin} />
                    )}
                </div>
            }
        </div>
    );
};

export default Admission;
