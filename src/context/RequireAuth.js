import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import { jwtDecode } from "jwt-decode";
import { useJwt } from "react-jwt";

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth();
    const location = useLocation();
    const accessToken = auth?.accessToken;

    const { decodedToken } = useJwt(accessToken);
    let decoded = decodedToken
    // console.error("decodedToken: ", JSON.stringify(decodedToken));
    console.log("decoded: ", decoded?.role);

    // let decode;
    // try {
    //     decode = accessToken ? jwtDecode(accessToken) : undefined;
        

    // } catch (error) {
    //     console.error("Error decoding access token:", error);
    //     decode = undefined;
    // }
    
    const roles = decoded?.role ? [decoded.role] : [];

    return (
        roles.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            :auth?.accessToken
                ?  <Outlet />
                // ?  <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/home" state={{ from: location }} replace />
    );
}

export default RequireAuth;