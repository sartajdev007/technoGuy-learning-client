import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const Category = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails)

    return (
        <div>
            <CourseDetails courseDetails={courseDetails[0]}></CourseDetails>
        </div>
    );
};

export default Category;