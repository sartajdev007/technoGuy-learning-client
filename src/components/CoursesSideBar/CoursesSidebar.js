import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesSidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h3 className='text-2xl font-semibold'>Course Categories</h3>
            <ul className="menu menu-compact lg:menu-normal bg-emerald-400 w-75 p-3 mt-3 rounded-box mx-5">
                {
                    categories.map(category => <li key={category.id} className='hover-bordered bg-green-500 text-white mt-1'><Link>{category.name}</Link></li>)
                }
            </ul>

        </div>
    );
};

export default CoursesSidebar;