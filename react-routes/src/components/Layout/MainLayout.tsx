import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/react.svg'
import { getAuthState, hasRoles, logout } from "../../utilities/authUtility";

const MainLayout = () => {
    const navigate = useNavigate();
    const { isAuthenticated, currentUser } = getAuthState();

    const handleLogout = () => {
        logout();
        navigate("/")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={logo} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                </ul>

                {isAuthenticated && hasRoles("admin") && <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">Admin</NavLink>
                    </li>
                </ul>}

                {isAuthenticated && hasRoles("customer") && <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/customer">Customer</NavLink>
                    </li>
                </ul>}
            </div>

            <div className="d-flex align-items-center gap-2">
                {isAuthenticated
                    ? (<><span className="me-2 text-secondary small d-flex align-items-center">Hello, {currentUser?.name}</span><button onClick={handleLogout} className="btn btn-outline-danger">Logout</button></>)
                    : (<NavLink className="btn btn-primary" to="/login">Login</NavLink>)}

            </div>
        </nav>
    );
}

export default MainLayout;