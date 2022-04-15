import React, { useState } from 'react';
import logo from '../../Images/logo2.png'
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import CustomLink from './CustomLink';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='py-2 bg-white z-50 flex container mx-auto'>
            <div>
                <img src={logo} className='h-8 ml-4' alt="" />
            </div>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden ml-auto mr-4'>
                {open ? <XIcon className='text-red-100'></XIcon> : <MenuIcon className='text-red-100'></MenuIcon>}
            </div>
            <ul className={`bg-white md:flex justify-end absolute md:static w-full duration-300 ease-in ${open ? 'top-11' : 'top-[-220px]'}`}>
                <CustomLink to={'/'}>HOME</CustomLink>
                <CustomLink to={'/reviews'}>REVIEWS</CustomLink>
                <CustomLink to={'/dashboard'}>DASHBOARD</CustomLink>
                <CustomLink to={'/blogs'}>BLOGS</CustomLink>
                <CustomLink to={'/about'}>ABOUT</CustomLink>
            </ul>
        </nav>

    );
};

export default Navbar;





{/* <nav className='py-2 z-50 bg-white md:flex justify-between container mx-auto'>
            <img src={logo} className='h-9 pl-4' alt="" />
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden top-3 absolute right-4'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex bg-white justify-end absolute md:static w-full duration-300 ease-in ${open ? 'top-30' : 'top-[-220px]'}`}>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/reviews'}>
                    <div className='w-6 h-6 mt-1 mx-auto'>
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </div>
                </CustomLink>
                <CustomLink to={'/dashboard'}>Login</CustomLink>
                <CustomLink to={'/blogs'}>Sign Up</CustomLink>
            </ul>
        </nav> */}