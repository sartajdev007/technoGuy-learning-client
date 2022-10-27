import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesSidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://learning-website-server-azure.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='ml-2 p-0'>
            <h3 className='text-2xl font-semibold'>Course Categories</h3>
            <ul className="menu menu-compact lg:menu-normal bg-emerald-400 w-75 p-2 mt-9 rounded-box mx-5">
                {
                    categories.map(category => <li key={category.id} className='hover-bordered font-semibold bg-green-500 text-white mt-1'><Link to={`/category/${category.id}`}>{category.name}</Link></li>)
                }
            </ul>

        </div>
    );
};

export default CoursesSidebar;