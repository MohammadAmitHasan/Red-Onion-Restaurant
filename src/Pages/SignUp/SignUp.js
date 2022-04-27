import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo2.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init'

const SignUp = () => {

    const [createUserWithEmailAndPassword, user, loading, error,
    ] = useCreateUserWithEmailAndPassword(auth, { emailVerificationOptions: true });

    let errorInfo = '';
    if (error) {
        errorInfo = error.message;
    }

    const signupHandle = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password)
        }
        else {
            alert('Password did not match')
        }
    }

    return (
        <div className='container mx-auto my-5 p-4'>
            <img className='mx-auto h-20' src={logo} alt="" />
            <div className='mx-auto mt-5 max-w-md text-center'>

                {
                    error && <p className='p-4 rounded bg-red-300'>{errorInfo}</p>
                }

                <form onSubmit={signupHandle}>
                    <input type="text" name='name' className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Your Name' required />

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