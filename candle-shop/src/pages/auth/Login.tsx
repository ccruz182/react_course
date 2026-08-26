import { useDispatch } from "react-redux";

import { useLoginUserMutation } from "../../store/api/authAPI";
import { setUser } from "../../store/slice/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utility/constants";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginUser] = useLoginUserMutation();

    const [loginInfo, setLoginInfo] = useState({ email: '', password: '', errors: {} });
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        const user = await loginUser({email: loginInfo.email, password: loginInfo.password});
        dispatch(setUser(user));
        navigate(ROUTES.HOME);
    }



    return (
        <div className="pt-5 d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow border-0">
                            <div className="card-body p-5">
                                <div className="text-center mb-4">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center bg-success rounded-circle mb-3"
                                        style={{ width: "60px", height: "60px" }}
                                    >
                                        <i className="bi bi-gem  fs-4"></i>
                                    </div>
                                    <h1 className="h3 mb-2 fw-bold">Welcome Back!</h1>
                                    <p className="text-muted">Sign in to your account</p>
                                </div>
                                <div
                                    className="alert alert-danger alert-dismissible fade show"
                                    role="alert"
                                >
                                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                    ></button>
                                </div>

                                <form action={handleLogin}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className={`form-control is-invalid`}
                                            id="email"
                                            name="email"
                                            placeholder="name@example.com"
                                            value={loginInfo.email}
                                            onChange={(e) => setLoginInfo(prev => ({ ...prev, email: e.target.value }))}
                                        />
                                        <label htmlFor="email">
                                            <i className="bi bi-envelope me-2"></i>Email Address
                                        </label>
                                        <div className="invalid-feedback">{loginInfo.errors?.email}</div>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <input
                                            type="password"
                                            className={`form-control is-invalid`}
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            value={loginInfo.password}
                                            onChange={(e) => setLoginInfo(prev => ({ ...prev, password: e.target.value }))}
                                        />
                                        <label htmlFor="password">
                                            <i className="bi bi-lock me-2"></i>Password
                                        </label>
                                        <div className="invalid-feedback">
                                            {loginInfo.errors?.password}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-success w-100 mb-4 py-3"
                                    >
                                        <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                        Signing In...
                                        <i className="bi bi-box-arrow-in-right me-2"></i>
                                        Sign In
                                    </button>

                                    <div className="text-center">
                                        <p className="mb-0 text-muted">
                                            Don't have an account?{" "}
                                            <a
                                                href="#"
                                                className="text-success fw-semibold text-decoration-none"
                                            >
                                                Create account
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;