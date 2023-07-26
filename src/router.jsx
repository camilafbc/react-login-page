import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "forgotPassword",
        element: <ForgotPassword />
    },
    {
        path: "signUp",
        element: <SignUp />
    }
])

export default router