import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from '../components/Home/Home';
import Courses from '../components/Courses/Courses';
import Login from '../components/Login/Login';
import FAQ from "../components/FAQ/FAQ";
import Blogs from "../components/Blogs/Blogs";
import Register from "../components/Register/Register";
import Category from "../components/Category/Category";
import GetCourseDetails from "../components/CourseDetails/GetCourseDetails";
import CheckOut from "../components/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <GetCourseDetails></GetCourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)
            }
        ]
    }
])