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
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../provider/Provider";

// Utility function to set document title

const setDocumentTitle = (title) => {
    document.title = title || "Default Title"; // Set a default title if none is provided
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    setDocumentTitle("Home | Iron Wheel ");
                    return null; // No additional data to fetch
                },
            },
            {
                path: "/register",
                element: <SignUp></SignUp>,
                loader: async () => {
                    setDocumentTitle("Register | Iron Wheel");
                    return null;
                },
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>,
                loader: async () => {
                    setDocumentTitle("Sign In | Iron Wheel");
                    return null;
                },
            },
            {
                path: "/services",
                element: <AllServices></AllServices>,
                loader: async () => {
                    setDocumentTitle("All Services | Iron Wheel");
                    const response = await fetch(`http://localhost:3000/services`);
                    return response.json();
                },
            },
            {
                path: "/services/:id",
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: async ({ params }) => {
                    const response = await axios(`http://localhost:3000/services/${params.id}`, { withCredentials: true });
                    const data = response.data; // Directly access the JSON data from the response
                    setDocumentTitle(data.name || "Service Details | Iron Wheel"); // Set the document title
                    return data; // Return the fetched data
                },

            },
            {
                path: "/add-service",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
                loader: async () => {
                    setDocumentTitle("Add Service | Iron Wheel");
                    return null;
                },
            },
            {
                path: "/update-service/:id",
                element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
                loader: async ({ params }) => {
                    try {
                        const response = await axios.get(`http://localhost:3000/services/${params.id}`, {
                            withCredentials: true // Ensures cookies (e.g., session or JWT tokens) are sent with the request
                        });
                        const data = response.data; // Axios automatically parses the response as JSON
                        setDocumentTitle(`Update ${data.name}` || "Update Service | Iron Wheel");
                        return data;
                    } catch (error) {
                        console.error("Error fetching service data:", error);
                        // Handle error or return a default value
                        return {};
                    }
                },
            },
            {
                path: "/manage-services",
                element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>,
                loader: async () => {
                    setDocumentTitle("Manage Services | Iron Wheel");
                    return null;
                },
            },
            {
                path: "/todo",
                element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>,
                loader: async () => {
                    setDocumentTitle("Service To-Do | Iron Wheel");
                    return null;
                },
            },
            {
                path: "/book-services/:id",
                element: <PrivateRoute><BookService></BookService></PrivateRoute>,
                loader: async ({ params }) => {
                    const response = await axios.get(`http://localhost:3000/services/${params.id}`, { withCredentials: true });
                    const data = response.data; // Axios automatically parses the response as JSON
                    setDocumentTitle(`Book ${data.name}` || "Book Service | Iron Wheel");
                    return data;
                },
            },
            {
                path: "/booked-services",
                element: <PrivateRoute><BookedServices></BookedServices></PrivateRoute>,
                loader: async () => {
                    setDocumentTitle("Booked Services | Iron Wheel");
                    return null;
                },
            },
        ]
    }
]);

export default router;
