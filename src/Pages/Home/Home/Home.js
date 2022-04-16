import React, { useState } from 'react';
import useCart from '../../../CustomHooks/useCart';
import Banner from '../Banner/Banner';
import FoodItems from '../FoodItems/FoodItems';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodItems></FoodItems>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;