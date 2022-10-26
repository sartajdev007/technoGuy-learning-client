import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* hero section */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Welcome To TechoGuy</h1>
                        <p className="mb-5">Your very own privately specialized learning point. I am TechnoGuy and I am here to guide to through the whole journey</p>
                        <Link to='/courses' className="btn btn-primary">Let's Go To the Courses</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;