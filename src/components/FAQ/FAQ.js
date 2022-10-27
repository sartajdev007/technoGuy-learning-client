import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className="hero h-96 bg-green-200">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-semibold text-black">FAQs</h1>
                    </div>
                </div>
            </div>
            <div className='mt-7'>
                <p className='text-5xl font-bold text-green-500'>Frequently Asked Questions</p>
            </div>
            <div className='mt-5 w-75'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" name="" id="" />
                    <div className="collapse-title text-xl font-medium">
                        How much does the course cost?
                    </div>
                    <div className="collapse-content text-start">
                        The courses of TechnoBoy is very much available
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;