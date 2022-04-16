
const getDataFromDB = () => {
    // Declare empty object if no cart data found in local storage it will be
    let cart = {};

    //get the cart data from local storage
    const storedCart = localStorage.getItem('cart');

    // If data is available convert as object and return
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}


// use local storage to manage cart data
const addToDb = id => {
    let cart = getDataFromDB();

    // add quantity
    const quantity = cart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        cart[id] = newQuantity;
    }
    else {
        cart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        const cart = JSON.parse(storedCart);
        if (id in cart) {
            delete cart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(cart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('cart');
}

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart,
    getDataFromDB
}