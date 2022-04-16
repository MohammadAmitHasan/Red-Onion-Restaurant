import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo2.png'
const SignUp = () => {
    return (
        <div className='container mx-auto my-5 p-4'>
            <img className='mx-auto h-20' src={logo} alt="" />
            <div className='mx-auto mt-5 max-w-md text-center'>

                <form>
                    <input type="text" name='name' className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Your Name' />

                    <input type="email" name="email" id="email" className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Your Email' required />

                    <input type="password" name="password" id="password" className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Enter Password' required />

                    <input type="password" name="confirmPassword" id="confirmPassword" className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Confirm Password' required />

                    <button type="submit" className='w-full p-3 rounded-md bg-red-500 hover:bg-red-600 text-yellow-100 my-3'>Sign Up</button>

                    <Link className='text-red-600' to={'/login'}>Already have an account.?</Link>
                </form>

            </div>
        </div>
    );
};

export default SignUp;