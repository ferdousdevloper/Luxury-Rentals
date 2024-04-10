/* eslint-disable react/prop-types */
import useAuth from "../Hook/useAuth";
import {Navigate, useLocation} from 'react-router-dom'


const PrivateDetails = ({children}) => {
    const {user} = useAuth();
    const location = useLocation()

    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateDetails;