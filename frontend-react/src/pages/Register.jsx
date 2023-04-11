import { Link } from "react-router-dom";
import { useState } from "react";
import useAuthContext from "../context/AuthContext";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const { register, errors } = useAuthContext();

    const handleRegister = async (event) => {
        event.preventDefault();
        register({ name, email, password, password_confirmation });
    };

    return (
        <div className="flex justify-center m-5">
            <form onSubmit={handleRegister}>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                        {errors.name && (
                            <div className="flex">
                                <span className="text-red-400 text-sm m-2 p-2">
                                    {errors.name[0]}
                                </span>
                            </div>
                        )}
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
                        <input
                            type="password"
                            value={password_confirmation}
                            onChange={(e) =>
                                setPasswordConfirmation(e.target.value)
                            }
                            placeholder="Password Confirmation"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <div className="form-control">
                            <button className="btn btn-outline btn-primary btn-sm">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
