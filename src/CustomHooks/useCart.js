import { useEffect, useState } from "react";
import { getDataFromDB } from "../Utilities/localStorage";
import useFoodItems from "./useFoodItems";

const useCart = () => {
    const [foodItems, setFoodItems] = useFoodItems();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getDataFromDB();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = foodItems.find(product => product.id === +id);
            // foodItems.map(product => console.log(product.id, +id));
            // console.log(addedProduct)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [foodItems]);

    return [cart, setCart];
}

export default useCart;