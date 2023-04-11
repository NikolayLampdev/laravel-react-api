import { Navigate, Outlet, Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const AuthLayout = () => {
    const { user, logout } = useAuthContext();

    return user ? (
        <>
            <div className="navbar w-full bg-yellow-400">
                <div className="navbar-start">
                    <div className="dropdown"></div>
                </div>
                <div className="navbar-center hidden lg:flex"></div>
                <ul className="navbar-end">
                    <li>
                        <Link
                            to="/"
                            className="btn btn-ghost btn-outline btn-sm nav-link"
                        >
                            Home
                        </Link>
                    </li>
                    {user ? (
                        <li>
                            <button
                                onClick={logout}
                                className="btn btn-ghost btn-outline btn-sm nav-link"
                            >
                                Logout
                            </button>
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link
                                    to="/login"
                                    className="btn btn-ghost btn-outline btn-sm nav-link"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/register"
                                    className="btn btn-ghost btn-outline btn-sm nav-link"
                                >
                                    Register
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            <Outlet />
        </>
    ) : (
        <Navigate to="/login" />
    );
};

export default AuthLayout;
