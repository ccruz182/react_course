import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { useRegisterUserMutation } from "../../store/api/authAPI";
import { setUser } from "../../store/slice/authSlice";

const Register = () => {

    const [registrationInfo, setRegistrationInfo] = useState({ displayName: '', email: '', password: '', errors: {} });
    const [isLoading, setIsLoading] = useState(false);

    const [registerUser] = useRegisterUserMutation();
    const dispatch = useDispatch();

    const handleRegistration = async () => {
        setIsLoading(true);
        const { displayName, email, password } = registrationInfo;

        if (displayName.length < 6) {
            setRegistrationInfo(prev => ({ ...prev, errors: { ...prev.errors, displayName: 'Name too short' } }));
        }

        let result;

        try {
           result = await registerUser({ displayName, email, password }).unwrap();
        } catch (e) {
            console.log("error", e)
        } finally {
            setIsLoading(false)
        }

        dispatch(setUser(result));
        setRegistrationInfo({ displayName: '', email: '', password: '', errors: {} });
        toast.success("User created successfully")

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
                                    <h1 className="h3 mb-2 fw-bold">Create Account</h1>
                                    <p className="text-muted">Join us and start shopping today</p>
                                </div>
                                {Object.keys(registrationInfo.errors).length > 0 && <div
                                    className="alert alert-danger alert-dismissible fade show"
                                    role="alert"
                                >
                                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                    ERROR
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                    ></button>
                                </div>}

                                <form action={handleRegistration}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className={`form-control ${registrationInfo.errors?.displayName ? "is-invalid" : ""}`}
                                            id="displayName"
                                            name="displayName"
                                            placeholder="Full Name"
                                            value={registrationInfo.displayName}
                                            onChange={(e) => setRegistrationInfo(prev => ({ ...prev, displayName: e.target.value }))}
                                        />
                                        <label htmlFor="displayName">
                                            <i className="bi bi-person me-2"></i>Full Name
                                        </label>
                                        <div className="invalid-feedback">{registrationInfo.errors?.displayName}</div>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className={`form-control ${registrationInfo.errors?.email ? "is-invalid" : ""}`}
                                            id="email"
                                            name="email"
                                            placeholder="name@example.com"
                                            value={registrationInfo.email}
                                            onChange={(e) => setRegistrationInfo(prev => ({ ...prev, email: e.target.value }))}
                                        />
                                        <label htmlFor="email">
                                            <i className="bi bi-envelope me-2"></i>Email Address
                                        </label>
                                        <div className="invalid-feedback">{registrationInfo.errors?.email}</div>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <input
                                            type="password"
                                            className={`form-control ${registrationInfo.errors?.password ? "is-invalid" : ""}`}
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            minLength="6"
                                            value={registrationInfo.password}
                                            onChange={(e) => setRegistrationInfo(prev => ({ ...prev, password: e.target.value }))}
                                        />
                                        <label htmlFor="password">
                                            <i className="bi bi-lock me-2"></i>Password
                                        </label>
                                        <div className="invalid-feedback">{registrationInfo.errors?.password}</div>
                                    </div>

                                    <button type="submit" className="btn btn-success w-100 mb-4">
                                        {isLoading ? (<><span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                            Creating Account...</>) : (<><i className="bi bi-person-plus me-2"></i>
                                                Create Account</>)}
                                    </button>

                                    <div className="text-center">
                                        <p className="mb-0 text-muted">
                                            Already have an account?
                                            <a
                                                href="#"
                                                className="text-success fw-semibold text-decoration-none"
                                            >
                                                Sign in here
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

export default Register;