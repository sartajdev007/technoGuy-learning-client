import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from '../components/Home/Home';
import Courses from '../components/Courses/Courses';
import Login from '../components/Login/Login';
import FAQ from "../components/FAQ/FAQ";
import Blogs from "../components/Blogs/Blogs";
import Register from "../components/Register/Register";
import Category from "../components/Category/Category";


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
                path: '/category',
                element: <Category></Category>,
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
        ]
    }
])