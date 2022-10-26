import React from 'react';

const Course = ({ course }) => {
    const { id, image, details, title } = course

    return (
        <div className="card w-96 bg-base-200 shadow-lg shadow-teal-500/50 mt-3">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl text-green-600 font-bold">{title}</h2>
                <p>Learn with us to become the best version of yourself</p>
                <div className="card-actions">
                    <button className="btn bg-green-500 border-0 hover:bg-green-400">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Course;