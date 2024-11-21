import React, { createContext } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const person = {
        name: 'Farabi',
        age: 21,
        profession: 'Developer'
    }

    return (
        <AuthContext.Provider value={{person}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;