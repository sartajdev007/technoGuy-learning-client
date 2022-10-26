import React from 'react';

const CourseDetails = ({ courseDetails }) => {
    const { title, image, details } = courseDetails;

    return (
        <div>
            {title}
        </div>
    );
};

export default CourseDetails;