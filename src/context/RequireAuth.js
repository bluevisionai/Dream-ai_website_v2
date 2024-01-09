import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth();
    const location = useLocation();
    const accessToken = auth?.accessToken;


    let decode;
    try {
        decode = accessToken ? jwtDecode(accessToken) : undefined;
    } catch (error) {
        console.error("Error decoding access token:", error);
        decode = undefined;
    }
    
    const roles = decode?.role ? [decode.role] : [];

    return (
        roles.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            :auth?.accessToken
                ?  <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/home" state={{ from: location }} replace />
    );
}

export default RequireAuth;