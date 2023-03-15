import React, { useContext } from "react";
import { CartItemContext } from "../context/ShoppingCartContext";

export function ShoppingCart() {

    const [cartItems, setCartItems] = useContext(CartItemContext);

    function deleteItem(id) {
        const updatedCart = cartItems.filter((element) => element.id !== id);
        setCartItems(updatedCart);
    }

    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="shoppingCartCanvas" aria-labelledby="shoppingCartCanvasLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="shoppingCartCanvasLabel">Your Cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div>
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Total Items</span>
                <span className="badge bg-primary rounded-pill">{cartItems.length}</span>
                </h4>
                <ul className="list-group mb-3">
                    {cartItems.map((item) => (

                        <div key={item.id} className="flex">
                           <li className="list-group-item d-flex justify-content-between">
                            <div>
                                <h6 className="my-0">{item.name}</h6>
                            </div>
                            <span className="text-muted">${item.price}<button className="btn btn-outline-light text-dark" onClick={() => deleteItem(item.id)}><i className="bi-trash me-1"></i></button></span>
                            </li>
                        </div>
                    ))}
                    <li className="list-group-item d-flex justify-content-between list-group-item-primary">
                    <span>Total (USD)</span>
                    <strong className="px-5">${(cartItems.reduce((a,b)=>a+parseFloat( b.price),0)).toFixed(2)}</strong>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
}
