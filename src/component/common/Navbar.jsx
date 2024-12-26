import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../provider/Provider';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';

const Navbar = () => {
    const { toggle, setToggle } = useContext(AuthContext)
    const navigate = useNavigate();
    const { user, signOutUser } = useContext(AuthContext);
    // console.log(user)
    const handleSignOut = () => {
        signOutUser()
            .then(res => {
                // console.log(res)

            })
            .catch(err => {
                // console.log(err)
            })

    }
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const links = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/services"}>Services</Link></li>
        {
            user?.email? (<li>
                <details className="  bg-base-100  rounded-md z-50">
                    <summary className="cursor-pointer  hover:text-primary">
                        Dashboard
                    </summary>
                    <ul className="p-2 space-y-2">
                        <li>
                            <Link
                                to="/add-service"
                                className="block text-sm font-medium text-gray-700 hover:text-primary"
                            >
                                Add Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/manage-services"
                                className="block text-sm font-medium text-gray-700 hover:text-primary"
                            >
                                Manage Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/booked-services"
                                className="block text-sm font-medium text-gray-700 hover:text-primary"
                            >
                                Booked Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/todo"
                                className="block text-sm font-medium text-gray-700 hover:text-primary"
                            >
                                To Do Service
                            </Link>
                        </li>
                    </ul>
                </details>
    
            </li>): ''
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">
                    <div>
                        <img className='w-12 border rounded-full' src="../../assets/icon.webp" alt="" />
                    </div></Link>
            </div>
            <div className=" navbar-center hidden lg:flex">
                <ul className=" menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="navbar-end flex gap-3">


                    <button onClick={handleToggle} className=' mx-3'>{toggle ? <CiLight className='text-yellow-300 text-3xl' /> : <MdDarkMode className='text-yellow-300 text-3xl' />}</button>

                    {user?.email ? <div className=" group ">
                        {/* user img */}
                        <div className="w-10">
                            {
                                user?.photoURL ?
                                    <img className="rounded-full  "
                                        referrerPolicy="no-referrer"
                                        alt=""
                                        src={user?.photoURL} /> :
                                    <img className="rounded-full animate__animated animate__pulse animate animate__infinite "
                                        alt=""
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            }



                        </div>
                        <div className="absolute right-0 top-0  bg-gray-800 text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-3">
                            {user?.displayName || "No User Name"}
                            <button onClick={handleSignOut} className="link link-hover text-white">SignOut </button>
                        </div>
                    </div> : ""}
                </div>
                {user ?
                    "" : <Link to={"/signin"} className="btn">Sign IN</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;