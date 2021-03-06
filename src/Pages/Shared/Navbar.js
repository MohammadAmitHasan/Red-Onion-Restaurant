import React, { useState } from 'react';
import logo from '../../Images/logo2.png'
import { MenuIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/solid';
import CustomLink from './CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../Firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [open, setOpen] = useState(false);

    return (
        <nav className='py-2 bg-white z-50 flex container items-center mx-auto'>
            <div>
                <img src={logo} className='h-12 p-1' alt="" />
            </div>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden ml-auto mr-4'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`bg-white md:flex justify-end absolute md:static w-full duration-300 ease-in ${open ? 'top-14' : 'top-[-220px]'}`}>
                <CustomLink to={'/'}>HOME</CustomLink>
                <CustomLink to={'/cart'}>
                    <div className='w-6 h-5 mt-1 mx-auto'>
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </div>
                </CustomLink>

                {
                    user ? <button className='bg-red-300 px-3 rounded-md hover:bg-red-500' onClick={() => signOut(auth)}>Logout</button> :
                        <div className='md:flex'>
                            <CustomLink to={'/login'}>Login</CustomLink>
                            <CustomLink to={'/signup'}>Sign Up</CustomLink>
                        </div>
                }

            </ul>
        </nav >

    );
};

export default Navbar;