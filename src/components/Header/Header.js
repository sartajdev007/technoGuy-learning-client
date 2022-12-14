import React from 'react';
import { Link } from 'react-router-dom';
import { FaHotjar, FaUserAlt } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useState } from 'react';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isDarkMode, setDarkMode] = useState(false);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };

    return (
        <div className="navbar sticky bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><FaHotjar className='text-green-500'></FaHotjar><span className='text-xl font-extrabold'>Techno</span>GUY</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 mx-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li>
                        <DarkModeSwitch
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            size={60}
                        />
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <>
                    {
                        user?.uid ?
                            <>
                                <span className='text-black pr-3'>{user?.displayName}</span>
                                {
                                    user?.photoURL ?
                                        <img title={user.displayName} className='mr-2 rounded-full' style={{ height: '40px' }} src={user?.photoURL} alt='' />
                                        :
                                        <>
                                            <FaUserAlt title={user.displayName} className='mr-2 text-green-500'></FaUserAlt>
                                        </>
                                }
                                <button onClick={handleLogOut} className="btn bg-red-600 border-0">Log Out</button>
                            </>
                            :
                            <>
                                <button className="btn mr-2 bg-transparent border-2 border-black hover:bg-green-400 text-black"><Link to='/login'>Login</Link></button>
                                <button className="btn bg-green-500 border-0 hover:bg-green-400"><Link to='/register'>Register</Link></button>
                            </>
                    }
                </>
            </div>
        </div>
    );
};

export default Header;