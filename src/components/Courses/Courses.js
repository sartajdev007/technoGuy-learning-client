import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSidebar from '../CoursesSideBar/CoursesSidebar'
import Course from '../Course/Course';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loader from '../Loader/Loader';


const Courses = () => {
    const courses = useLoaderData();
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <div className="hero h-96 bg-green-200">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-semibold text-black">Courses</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row mt-10'>
                <div className='basis-1/4 ml-2'>
                    <CoursesSidebar></CoursesSidebar>
                </div>
                <div className='basis-3/4 ml-8'>
                    <h2 className='text-2xl font-semibold text-center'>Our Available Courses</h2>
                    <div className='grid grid-cols md:grid-cols-2 gap-4 pt-5'>
                        {
                            courses.map(course => <Course
                                key={course.id}
                                course={course}
                            ></Course>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;