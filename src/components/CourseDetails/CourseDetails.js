import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = ({ courseDetails }) => {
    const { title, image, details } = courseDetails;

    return (
        <div>
            <div className="hero min-h-screen bg-slate-100" style={{ background: `url(${image})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl outline outline-offset-2 outline-green-500 font-semibold text-white border-2 p-5 shadow-md shadow-green-300">{title}</h1>
                    </div>
                </div>
            </div>
            <div className='mt-10 px-5'>
                <h1 className='text-4xl text-start font-semibold underline decoration-double decoration-green-600'>What You Can Learn From This Course?</h1>
                <p className='mt-3 text-start'>{details}</p>
                <button className='mt-10 btn bg-green-500 border-0 hover:bg-green-400'><Link to='/checkout'>Enroll Course Now</Link></button>
            </div >
        </div >
    );
};

export default CourseDetails;