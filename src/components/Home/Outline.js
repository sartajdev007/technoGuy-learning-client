import React from 'react';
import CountUp from 'react-countup';

const Outline = () => {
    return (
        <div className='bg-teal-700 shadow-xl shadow-green-100'>
            <div className='flex my-10 justify-between mx-24 text-white p-12'>
                <div>
                    <h1 className='text-7xl font-bold'><CountUp end={25} />+</h1>
                    <p className='text-xl font-bold'>Expert Instructors</p>
                </div>
                <div>
                    <h1 className='text-7xl font-bold'><CountUp end={200} />+</h1>
                    <p className='text-xl font-bold'>Hours of Videos</p>
                </div>
                <div>
                    <h1 className='text-7xl font-bold'><CountUp end={5000} />+</h1>
                    <p className='text-xl font-bold'>Successful Students</p>
                </div>
            </div>
        </div>
    );
};

export default Outline;