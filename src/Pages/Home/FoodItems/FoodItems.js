
import { useEffect, useState } from 'react';
import useFoodItems from '../../../CustomHooks/useFoodItems';
import FoodItem from './FoodItem/FoodItem';

const FoodItems = () => {
    const [foodItems, setFoodItems] = useFoodItems();
    const [catagories, setCatagories] = useState([]);
    const [active, setActive] = useState('');

    useEffect(() => {
        setCatagories(foodItems);
    }, [foodItems])

    const breakfastHandle = () => {
        const breakfastItems = foodItems.filter(foodItem => foodItem.category === 'breakfast')
        setCatagories(breakfastItems);
        setActive('breakfast');

    }
    const lunchHandle = () => {
        const lunchItems = foodItems.filter(foodItem => foodItem.category === 'lunch')
        setCatagories(lunchItems);
        setActive('lunch');
    }
    const dinnerHandle = () => {
        const dinnerItems = foodItems.filter(foodItem => foodItem.category === 'dinner')
        setCatagories(dinnerItems);
        setActive('dinner');
    }

    return (
        <div className='my-10 container mx-auto text-center'>

            <div className='text-center mb-14'>
                <button onClick={breakfastHandle} className={`text-lg mx-4 sm:mx-10 font-semibold hover:text-red-500 border-b-2  ${active === 'breakfast' ? 'border-red-500 text-red-500' : 'border-white'}`}>Breakfast</button>

                <button onClick={lunchHandle} className={`text-lg mx-4 sm:mx-10 font-semibold hover:text-red-500 border-b-2  ${active === 'lunch' ? 'border-red-500 text-red-500' : 'border-white'}`}>Lunch</button>

                <button onClick={dinnerHandle} className={`text-lg mx-4 sm:mx-10 font-semibold hover:text-red-500 border-b-2  ${active === 'dinner' ? 'border-red-500 text-red-500' : 'border-white'}`}>Dinner</button>
            </div>

            <div className='mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    catagories.map(foodItem => <FoodItem
                        key={foodItem.id}
                        foodItem={foodItem}
                    ></FoodItem>)
                }
            </div>
            <button className='py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg'>Checkout Your Food</button>
        </div >
    );
};

export default FoodItems;