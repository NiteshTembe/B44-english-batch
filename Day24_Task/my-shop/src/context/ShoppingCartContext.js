import React , { useState } from 'react';

export const initialItems = []

export const CartItemContext = React.createContext();

const Store = ({children}) => {
    const [cartItems, setCartItems] = useState(initialItems);

    return (
        <CartItemContext.Provider value={[cartItems, setCartItems]}>{children}</CartItemContext.Provider>
    );
}

export default Store;