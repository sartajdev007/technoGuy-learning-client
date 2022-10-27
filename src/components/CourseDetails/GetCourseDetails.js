import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();

const GetCourseDetails = () => {
    const course = useLoaderData();
    const { title, image, details, checkout_id } = course


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
            <div ref={ref} className='mt-10 px-5'>
                <div className='flex'>
                    <h1 className='text-4xl text-start font-semibold'>What You Can Learn From This Course?</h1>
                    <ReactToPdf targetRef={ref} filename="course-details.pdf">
                        {({ toPdf }) => <button className='btn bg-indigo-500 ml-10 border-0 hover:bg-indigo-400' onClick={toPdf}>Get Details in pdf</button>}
                    </ReactToPdf>
                </div>
                <div className='text-start'>
                    <p className='mt-3 text-start'>{details}</p>
                    <button className='mt-10 btn bg-green-500 border-0 hover:bg-green-400'><Link to={`/checkout/${checkout_id}`}>Enroll Course Now</Link></button>
                </div>
            </div >
        </div>
    );
};

export default GetCourseDetails;