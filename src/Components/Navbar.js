import React from 'react';
import { Link } from 'react-router-dom';
import tubedube from './images/image 1.png'

const Navbar = () => {
    return (

        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <img src={tubedube} alt="" />
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link className='text-[#80008040]' to='/'>My Assignment</Link>
                        </li>
                        <li>
                            <Link className='text-[#80008040]' to='/body'>Chat with mentor</Link>
                        </li>
                        <li>
                            <p className='text-[#800080] flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>ProfileName</p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;