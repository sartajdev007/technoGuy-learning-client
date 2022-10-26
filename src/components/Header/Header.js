import React from 'react';
import { Link } from 'react-router-dom';
import { FaHotjar } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar sticky bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><FaHotjar></FaHotjar><span className='text-xl font-extrabold'>Techno</span>GUY</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <div>
                            <span className='text-black pr-3'>{user?.displayName}</span>
                            <button onClick={handleLogOut} className="btn">Log Out</button>
                        </div>
                        :
                        <div>
                            <button className="btn mr-2"><Link to='/login'>Login</Link></button>
                            <button className="btn"><Link to='/register'>Register</Link></button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;