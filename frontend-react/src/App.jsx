import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";

function App() {
    return (
        <div>
            <div className="max-w-full mx-auto">
                
            </div>
            <div>
                <Routes>
                    <Route element={<AuthLayout />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route element={<GuestLayout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
