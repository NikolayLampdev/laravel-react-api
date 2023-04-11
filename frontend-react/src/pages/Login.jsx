import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const { errors, login } = useAuthContext();

    const handleLogin = async (event) => {
        event.preventDefault();
        login({ email, password, remember })
    };

    return (
        <div className="flex justify-center m-5">
            <form onSubmit={handleLogin}>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                        {errors.email && (
                            <div className="flex">
                                <span className="text-red-400 text-sm m-2 p-2">
                                    {errors.email[0]}
                                </span>
                            </div>
                        )}
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                        {errors.password && (
                            <div className="flex">
                                <span className="text-red-400 text-sm m-2 p-2">
                                    {errors.password[0]}
                                </span>
                            </div>
                        )}
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Remember me</span>
                                <input
                                    type="checkbox"
                                    checked={remember}
                                    onChange={(e) =>
                                        setRemember(e.target.checked)
                                    }
                                    className="checkbox checkbox-primary"
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <Link
                                to="/register"
                                className="btn btn-ghost btn-outline btn-sm nav-link"
                            >
                                Register
                            </Link>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-outline btn-primary btn-sm">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
