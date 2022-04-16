import React from 'react';
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