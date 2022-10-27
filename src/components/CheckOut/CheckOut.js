import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData()

    return (
        <div>
            <div className="hero h-96 bg-green-200">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-semibold text-black">Check Out for:</h1>
                        <p className='mb-5 text-3xl font-semibold text-emerald-600 border-t-2 border-b-2 border-blue-500 p-2'>{course.title}</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default CheckOut;