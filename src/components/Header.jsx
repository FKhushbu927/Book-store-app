import React, { useState } from 'react';
import { Bars3BottomRightIcon, BoltIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        < div className='bg-orange-50 drop-shadow-lg px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  lg:px-8'>
             <div className='relative flex items-center justify-between'>
                <Link to='/' className='inline-flex items-center'>
                    <BoltIcon className='h-6 w-6 text-orange-500'></BoltIcon>

                    <span className='text-xl ml-2 font-bold tracking-wide text-orange-500'>Book Store</span>

                </Link>

                {/* nav items */}
                <ul className='items-center hidden space-x-8  lg:flex md:flex'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'text-orange-500  font-bold underline underline-offset-2' : 'text-orange-400')}

                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/books"
                            className={({ isActive }) => (isActive ? 'text-orange-500  font-bold underline underline-offset-2' : 'text-orange-400')}
                        >
                            Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'text-orange-500  font-bold underline underline-offset-2' : 'text-orange-400')}
                        >
                            About Us
                        </NavLink>
                    </li>
                </ul>
                {/* Mobile Navbar Section */}
                <div className='lg:hidden '>
                    {/* Dropdown Open Button */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-orange-500  font-bold' />
                    </button>



                    {isMenuOpen && (

                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-stone-100 border rounded drop-shadow-lg'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>
                                            <BoltIcon className='h-6 w-6 text-orange-600' />
                                            <span className='ml-2 text-xl font-bold tracking-wide text-orange-500  uppercase'>
                                               Book Store
                                            </span>
                                        </Link>
                                    </div>

                                    {/* drop down menu close */}

                                    <div>
                                        <button
                                           aria-label='Close Menu'
                                           title='Close Menu'
                                           onClick={() => setIsMenuOpen(false)}
                                        >
                                        <XMarkIcon className='w-5 text-orange-600 ' />
                                        </button>
                                    </div>
                                </div>
                                {/* mobile nav icon section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to= '/'    
                                            className='font-medium tracking-wide text-orange-500  transition-colors duration-200 hover:text-orange-400'
                                            >

                                            Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/books'
                                                  className='font-medium tracking-wide text-orange-500  transition-colors duration-200 hover:text-orange-400'
                                            >
                                             Books
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/about'
                                              className='font-medium tracking-wide text-orange-500  transition-colors duration-200 hover:text-orange-400'
                                            >
                                            About Us
                                            </Link>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </div>

                    )}
                </div>
             </div>
        </div>
    );
};

export default Header;