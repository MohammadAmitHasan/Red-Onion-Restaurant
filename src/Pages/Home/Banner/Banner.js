import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div id='banner-container' className=''>
            <div className='absolute top-1/3 md:top-36 mx-auto w-full flex items-center justify-center'>
                <div className='text-center p-5'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl my-7'>Best food waiting for your belly</h2>
                    <div className='relative w-3/4 mx-auto'>
                        <input className='h-12 pl-5 w-full left-0 rounded-full focus:outline-red-400' placeholder='Search Food Items' type="text" />
                        <button className='absolute right-0 bg-red-500 text-white h-12 rounded-full px-4 md:px-8'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;