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
            <div className='my-10 mx-auto flex flex-col justify-center w-[500px]'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
                    <input type="checkbox" name="" id="" />
                    <div className="collapse-title text-xl font-medium">
                        How much does the course cost?
                    </div>
                    <div className="collapse-content text-start">
                        The courses of TechnoBoy is very much affordable for students,job holders,stay-at-home moms. Our main goal is to integrate technology in our daily lives. We also provide beginner class for free in Youtube.
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" name="" id="" />
                    <div className="collapse-title text-xl font-medium">
                        Do we get lifetime support?
                    </div>
                    <div className="collapse-content text-start">
                        Of Course,You do!Also you get our new courses and updates for free if you buy subscription for one. That means "Pay Once to Enjoy Lifetime"
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;