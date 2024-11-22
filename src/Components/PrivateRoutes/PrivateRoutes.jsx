import React, { useContext } from 'react';
import { AuthContext } from '../AuthComponent/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { loading } = useContext(AuthContext)

    const { user } = useContext(AuthContext)

    if (loading) {
        return <div className='flex justify-center'><span className="loading loading-infinity loading-lg text-center" style={{ width: '100px', height: '100px', height:'50vh'}}></span></div>
    }
    if (user) {
        return children
    }

    return <Navigate to={"/admission"}></Navigate>

};

export default PrivateRoutes;