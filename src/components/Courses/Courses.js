import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSidebar from '../CoursesSideBar/CoursesSidebar'
import Course from '../Course/Course';


const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='flex'>
            <div className=''>
                <CoursesSidebar></CoursesSidebar>
            </div>
            <div className=''>
                <h2 className='text-2xl font-semibold'>Our Available Courses: {courses.length}</h2>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;