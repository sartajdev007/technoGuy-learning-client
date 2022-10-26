import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const Category = () => {
    const all = useLoaderData()

    return (
        <div>
            <h3>Courses {all.length}</h3>
            {
                all.map(courseDetails => <CourseDetails
                    key={courseDetails.id}
                    courseDetails={courseDetails}
                >
                </CourseDetails>)
            }
        </div>
    );
};

export default Category;