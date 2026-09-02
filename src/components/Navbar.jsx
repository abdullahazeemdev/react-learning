import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">

                    {/* Logo / Brand */}
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-indigo-600">Navbar</span>
                    </div>

                    {/* Menu Links (Yeh desktop aur mobile dono par dikhenge kyunki JS logic nahi hai) */}
                    <div className="flex items-center space-x-8">

                        <Link
                        to={"/"}
                        >
                            <button className="text-gray-700 cursor-pointer hover:text-indigo-600 font-medium transition duration-150">Home</button>
                        </Link>

                         <Link
                        to={"/about"}
                        >
                            <button className="text-gray-700 cursor-pointer hover:text-indigo-600 font-medium transition duration-150">About</button>
                        </Link>


                         <Link
                        to={"/contact"}
                        >
                            <button className="text-gray-700 cursor-pointer hover:text-indigo-600 font-medium transition duration-150">Contact</button>
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};



export default Navbar