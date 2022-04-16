import React from 'react';
import service1 from '../../../Images/Choosen-us/adult-blur-blurred-background-687824.png'
import service2 from '../../../Images/Choosen-us/chef-cook-food-33614.png'
import service3 from '../../../Images/Choosen-us/architecture-building-city-2047397.png'

import serviceIcon1 from '../../../Images/icons/Group 204.png'
import serviceIcon2 from '../../../Images/icons/Group 1133.png'
import serviceIcon3 from '../../../Images/icons/Group 245.png'
import { ArrowCircleRightIcon } from '@heroicons/react/solid';



const WhyChooseUs = () => {
    const services = [
        { id: 1, title: 'Fast Delivery', iconTag: serviceIcon1, photo: service1, description: 'We provide fast food delivery all over the city. Customers gets the food as soon as possible.' },
        { id: 2, title: 'A Good Auto Responder', iconTag: serviceIcon2, photo: service2, description: 'Our app and website provides the updated status automatically. You will be notified where the food is right now.' },
        { id: 3, title: 'Home Delivery', iconTag: serviceIcon3, photo: service3, description: 'We also provide home delivery within lowest time possible. You have to pay the delivery charge as our terms and conditions.' },
    ]
    return (

        <div className='container mx-auto my-10 p-5'>

            <h3 className='text-3xl mb-5'>Why Choose Us</h3>
            <p>We provide best quality foods with our best possible services</p>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =>
                        <div key={service.id}>
                            <img className='w-full' src={service.photo} alt="" />
                            <div className='mt-8 pr-3'>
                                <h4 className='flex items-center text-lg mb-2'>
                                    <img src={service.iconTag} alt="" />
                                    <span className='ml-2'>{service.title}</span>
                                </h4>

                                <p className='ml-14 text-gray-600'>{service.description}</p>

                                <button className='my-2 flex items-center text-blue-500 hover:bg-red-100 px-4 py-2 ml-10 rounded-lg'>
                                    See More
                                    <span className='ml-2'>
                                        <ArrowCircleRightIcon className='w-5 h-5 text-red-500'></ArrowCircleRightIcon>
                                    </span>
                                </button>
                            </div>
                        </div>)
                }
            </div>
        </div >
    );
};

export default WhyChooseUs;