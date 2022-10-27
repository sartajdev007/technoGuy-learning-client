import React from 'react';

const CourseDetails = ({ courseDetails }) => {
    const { title, image, details } = courseDetails;

    return (
        <div>
            <div className="hero h-96 bg-slate-100" style={{ background: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl outline outline-offset-2 outline-green-500 font-semibold text-white border-2 p-5 shadow-md shadow-green-300">{title}</h1>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h1 className='text-4xl text-start font-semibold underline decoration-double'>What You Can Learn From This Course?</h1>
            </div>
        </div>
    );
};

export default CourseDetails;