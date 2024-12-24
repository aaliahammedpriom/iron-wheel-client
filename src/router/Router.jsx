import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/layout/MainLayout";
import Home from "../component/home/Home";
import SignUp from "../component/auth/SignUp";
import SignIn from "../component/auth/SignIn";
import Error from "../component/common/Error"
import AllServices from "../component/services/AllServices";
import ServiceDetails from "../component/services/ServiceDetails";
import BookService from "../component/bookservice/BookService";
import PrivateRoute from "./PrivateRoute";
import AddService from "../component/addService/AddService";
import BookedServices from "../component/bookedServices/BookedServices";
import ManageServices from "../component/manageService/ManageServices";
import ServiceToDo from "../component/serviceToDo/ServiceToDo";
import UpdateService from "../component/updateService/UpdateService";

const router = createBrowserRouter([
   {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
        {
            path:"/services",
            element:<AllServices></AllServices>,
            loader:()=>fetch(`http://localhost:3000/services`)
        },
        {
            path:"/services/:id",
            element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:3000/services/${params.id}`)
        },
        {
            path:"/add-service",
            element:<PrivateRoute><AddService></AddService></PrivateRoute>,
            
        },
        {
            path:"/update-service/:id",
            element:<PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:3000/services/${params.id}`)
            
        },
        {
            path:"/manage-services",
            element:<PrivateRoute><ManageServices></ManageServices></PrivateRoute>,
            
        },
        {
            path:"/todo",
            element:<PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>,
            
        },
        {
            path:"/book-services/:id",
            element:<PrivateRoute><BookService></BookService></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:3000/services/${params.id}`)
        },
        {
            path:"/booked-services",
            element:<PrivateRoute><BookedServices></BookedServices></PrivateRoute>,
            // loader:({params})=>fetch(`http://localhost:3000/services/${params.id}`)
        },
    ]
   }
])
export default router