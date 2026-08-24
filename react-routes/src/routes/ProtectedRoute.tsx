import { Navigate, useLocation } from "react-router-dom";
import { getAuthState } from "../utilities/authUtility";
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = getAuthState();
    const location = useLocation();

    if (!isAuthenticated) return <Navigate to="/login" state={{from: location}} />

    return children;
}

export default ProtectedRoute;