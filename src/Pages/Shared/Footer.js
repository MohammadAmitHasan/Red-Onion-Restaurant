import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'

const Footer = () => {
    return (
        <div className='p-14 bg-zinc-900 grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-gray-300'>
            <div className='md:col-span-2'>
                <img src={logo} className='h-12' alt="" />
            </div>

            <div>
                <p className='my-2'><Link to={'/about'}>About Online Food</Link></p>
                <p className='my-2'><Link to={'/blog'}>Read Our Blog</Link></p>
                <p className='my-2'><Link to='/signup'>Signup To Deliver</Link></p>
                <p className='my-2'><Link to='/addRes'>Add your Restaurant</Link></p>
            </div>

            <div>
                <p className='my-2'><Link to={'/help'}>Get Help</Link></p>
                <p className='my-2'><Link to={'/faqs'}>Read FAQs</Link></p>
                <p className='my-2'><Link to='/cities'>View All Cities</Link></p>
                <p className='my-2'><Link to='/resLocation'>Restaurant Near Me</Link></p>
            </div>

            <div className='md:col-span-2 text-gray-400'>
                <small>Copyright &copy; {new Date().getFullYear()} Red Onion</small>
            </div>

            <div className='md:col-span-2 text-right'>
                <Link className='mx-2' to={'/'}>Privacy Policy</Link>
                <Link className='mx-2' to={'/'}>Terms Of Use</Link>
                <Link className='mx-2' to={'/'}>Pricing</Link>
            </div>
        </div>
    );
};

export default Footer;