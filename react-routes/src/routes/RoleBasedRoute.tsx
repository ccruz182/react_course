import { Navigate } from "react-router-dom";
import { getAuthState, hasAnyRole } from "../utilities/authUtility";
const RoledBasedRoute = ({ children, allowedRoles}) => {
    const { isAuthenticated, currentUser } = getAuthState();

    if (!isAuthenticated) return <Navigate to="/login" />

    if(!hasAnyRole(allowedRoles)) return (<h1>Access denied</h1>)

    return children;
}

export default RoledBasedRoute;