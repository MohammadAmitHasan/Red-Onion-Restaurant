import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import logo from '../../Images/logo2.png'

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorInfo = '';
    if (error) {
        errorInfo = error.message;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='container mx-auto my-5 p-4'>
            <img className='mx-auto h-20' src={logo} alt="" />
            <div className='mx-auto mt-5 max-w-md text-center'>

                {
                    error && <p className='p-4 rounded bg-red-300'>{errorInfo}</p>
                }

                <form onSubmit={handleLogin}>

                    <input type="email" name="email" id="email" className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Your Email' required />

                    <input type="password" name="password" id="password" className='bg-gray-200 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Enter Password' required />



                    <button type="submit" className='w-full p-3 rounded-md bg-red-500 hover:bg-red-600 text-yellow-100 my-3'>Login</button>

                    <Link className='text-red-600' to={'/signup'}>Don't have an account.?</Link>
                </form>

            </div>
        </div>
    );
};

export default Login;