import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
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
                setUser(googleUser);
                console.log(googleUser);
            })
            .catch((error) => {
                console.log(error);
                alert(error.message);
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
            })
    }

    const signInPassBasedUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const passwordBasedUser = result.user;
                setUser(passwordBasedUser)
                console.log(passwordBasedUser);
            })
            .catch((error) => {
                console.log(error.message);
            })

    }

    return (
        <AuthContext.Provider value={{
            createGoogleUser,
            createPasswordBasedUser,
            signInPassBasedUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
