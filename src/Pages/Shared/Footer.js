import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'

const Footer = () => {
    return (
        <div className='p-5 sm:p-14 bg-zinc-900'>
            <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-gray-300'>
                <div>
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

                <div>
                    <p className='my-2'><Link to={'/'}>Privacy Policy</Link></p>
                    <p className='my-2'><Link to={'/'}>Terms Of Use</Link></p>
                    <p className='my-2'><Link to={'/'}>Pricing</Link></p>
                </div>
            </div>
            <div className='text-gray-400 text-center mt-5'>
                <small>Copyright &copy; {new Date().getFullYear()} Red Onion</small>
            </div>
        </div>

    );
};

export default Footer;