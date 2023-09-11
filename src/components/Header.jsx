import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='flex items-center justify-between ml-5 mr-4 my-5'>
                <Link to='/' className='inline-flex items-center'>
                    <BoltIcon className='h-6 w-6 text-fuchsia-500'></BoltIcon>

                    <span className='text-xl ml-2 font-bold tracking-wide text-violet-800'>Book Store</span>

                </Link>
     
            {/* nav items */}
            <ul className='items-center hidden space-x-8  lg:flex md:flex'>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive}) => (isActive ? 'text-violet-800' : 'default')}

                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/books"
                        className={({ isActive}) => (isActive ? 'text-violet-800' : 'default')}
                    >
                        Books
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive}) => (isActive ? 'text-violet-800' : 'default')}
                    >
                        About Us
                    </NavLink>
                </li>
            </ul>
            </div>
        </>
    );
};

export default Header;