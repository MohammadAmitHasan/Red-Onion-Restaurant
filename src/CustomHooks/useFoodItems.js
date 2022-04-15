import { useEffect, useState } from "react";

const useFoodItems = () => {

    const [foodItems, setFoodItems] = useState([]);
    useEffect(() => {
        fetch('foodItems.json')
            .then(res => res.json())
            .then(data => setFoodItems(data))
    }, [])
    return [foodItems, setFoodItems];
}

export default useFoodItems;
