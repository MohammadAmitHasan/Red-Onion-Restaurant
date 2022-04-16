import React from 'react';
import { addToDb } from '../../../../Utilities/localStorage';

const FoodItem = ({ foodItem }) => {
    const { id, name, price, photo } = foodItem;

    return (
        <div className='text-center rounded-2xl hover:shadow-2xl p-5 cursor-pointer'>
            <img className='w-1/2 mx-auto' src={photo} alt="" />
            <h4 className='text-xl'>{name}</h4>
            <h2 className='text-2xl font-semibold'>${price}</h2>
            <button onClick={() => addToDb(id)} className=' mt-3 hover:bg-red-300 rounded-3xl px-6 py-2 bg-red-200'>Select {name}</button>
        </div>
    );
};

export default FoodItem;