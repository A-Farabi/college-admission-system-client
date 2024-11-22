import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    console.log(user, loading);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const createGoogleUser = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                const googleUser = result.user;
                console.log(googleUser);
            })
            .catch((error) => {
                console.log(error);
                alert(error.message);
                alert(error.message)
            });
    };

    const createPasswordBasedUser = (email, password, fullName, photourl) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const passwordBasedUser = result.user;

                // Update user profile with full name and photo URL
                return updateProfile(passwordBasedUser, {
                    displayName: fullName,
                    photoURL: photourl,
                }).then(() => {
                    console.log("User profile updated:", passwordBasedUser);
                    setUser(passwordBasedUser);
                });
            })

            .catch((error) => {
                console.log(error.message);
                alert(error.message)
            })
    }

    const signInPassBasedUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const passwordBasedUser = result.user;
                console.log(passwordBasedUser);
            })
            .catch((error) => {
                console.log(error.message);
                alert(error.message)
            })

    }

    const logOut = () =>{
        return signOut(auth)
    }

    return (
        <AuthContext.Provider value={{
            user,
            logOut,
            createGoogleUser,
            createPasswordBasedUser,
            signInPassBasedUser,
            loading,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
