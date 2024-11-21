import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../../Firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    const createGoogleUser = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                const googleUser = result.user;
                setUser(googleUser);
                console.log(googleUser);
            })
            .catch((error) => {
                console.log(error);
                alert(error.message);
            });
    };

    return (
        <AuthContext.Provider value={{ createGoogleUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
