import React from 'react';
import useCart from '../../CustomHooks/useCart';

const Cart = () => {
    const [cart] = useCart();
    let subTotal = 0;
    let tax = 0;
    let deliveryFee = 2;

    cart.forEach(element => {
        subTotal += (element.price * element.quantity)
    });
    tax = subTotal * 0.1;

    const grandTotal = subTotal + tax + deliveryFee;

    return (
        <div className='container mx-auto mt-5 p-3'>
            <h1 className='text-center text-3xl text-red-500 font-semibold'>Selected Foods</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10'>
                <div>
                    {
                        cart.map(item => <div className='' key={item.id}>
                            <div className='flex items-center my-8 p-3 bg-gray-100 rounded-lg'>
                                <div>
                                    <img className='h-28' src={item.photo} alt="" />
                                </div>

                                <div className='ml-2'>
                                    <h5 className='text-lg my-1'>{item.name}</h5>
                                    <h3 className='my-1'>Unit Pice: ${item.price}</h3>
                                    <h5 className='my-1'>Quantity: {item.quantity}</h5>
                                    <h3 className='text-xl '>Total Price: <span className='text-red-500 font-semibold'> ${item.quantity * item.price}</span></h3>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

                <div className='pt-10'>
                    <p className='my-2'>Subtotal: ${subTotal}</p>
                    <p className='my-2'>Tax: ${tax}</p>
                    <p className='my-2'>Delivery Fee: ${deliveryFee}</p>
                    <h3 className='text-2xl'>Grand Total: <span className='text-red-400 font-semibold'>${grandTotal}</span> </h3>
                </div>

            </div>
        </div>
    );
};

export default Cart;