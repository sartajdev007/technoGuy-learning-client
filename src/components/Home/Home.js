import React from 'react';
import { FaChild, FaClipboardList, FaCompass } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <div>
            {/* hero section */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-semibold">Welcome to TechoGuy</h1>
                        <p className="mb-5">Your very own privately specialized learning point. I am TechnoGuy and I am here to guide to through the whole journey</p>
                        <Link to='/courses' className="btn bg-green-500 hover:bg-green-700 border-0">Let's Go</Link>
                    </div>
                </div>
            </div>
            {/* hero section end */}
            <AboutUs></AboutUs>
            <div className='mt-7'>
                <p className='text-3xl font-bold text-green-500'>Learn The New Way Of The World With Us</p>
                <p className='text-xl pt-5'>The world is turning digital and so should you. We are just here to show you the right path to going digital</p>
            </div>

            {/* card section */}
            <div className='mt-10 flex justify-center gap-12 md:flex-row flex-col  w-100'>
                <div className="card w-96 glass shadow-xl shadow-teal-200">
                    <div className='p-4'>
                        <figure><FaChild className='text-8xl text-green-500'></FaChild></figure>
                        <div className="card-body">
                            <h2 className="text-center font-bold text-3xl">Self Learning</h2>
                            <p>Learn Yourself by watching our specialized videos</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass shadow-xl shadow-teal-200">
                    <div className='p-4'>
                        <figure><FaClipboardList className='text-8xl  text-green-500'></FaClipboardList ></figure>
                        <div className="card-body">
                            <h2 className="text-center font-bold text-3xl">Set Target</h2>
                            <p>We will help you define your target and the way to reach it</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass shadow-xl shadow-teal-200">
                    <div className='p-4'>
                        <figure><FaCompass className='text-8xl  text-green-500'></FaCompass></figure>
                        <div className="card-body">
                            <h2 className="text-center font-bold text-3xl">Lifetime Support</h2>
                            <p>Lifetime Access To Our Resourses and Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;