import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loader from '../Loader/Loader';

const CheckOut = () => {
    const course = useLoaderData()
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <Loader></Loader>
    }

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
            <div className='my-10'>
                <h1 className='text-5xl font-semibold'>Checkout system is under development</h1>
            </div>
        </div>
    );
};

export default CheckOut;