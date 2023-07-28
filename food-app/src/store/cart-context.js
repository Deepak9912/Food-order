import React from 'react'

const CartContext = React.createContext({
    items: [], //we will add cart items here
    totalAmount: 0,  //initially 0
    addItem: (item) => {},  //function to update the context
    removeItem: (id) => {}  //function to update the context
});

export default CartContext;