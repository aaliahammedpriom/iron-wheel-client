import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/layout/MainLayout";
import Home from "../component/home/Home";
import SignUp from "../component/auth/SignUp";
import SignIn from "../component/auth/SignIn";

const router = createBrowserRouter([
   {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <h2>page not found</h2>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:"/register",
            element:<SignUp></SignUp>
        },
        {
            path:"/signin",
            element:<SignIn></SignIn>
        },
    ]
   }
])
export default router