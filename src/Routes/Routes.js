import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from '../components/Home/Home';
import Courses from '../components/Courses/Courses';
import Login from '../components/Login/Login';
import FAQ from "../components/FAQ/FAQ";
import Blogs from "../components/Blogs/Blogs";
import Register from "../components/Register/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
        ]
    }
])