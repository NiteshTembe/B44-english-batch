import React, { useContext } from "react";
import { CartItemContext } from "../context/ShoppingCartContext";

export function Product({ id, name, thumbnail, price, discountPercentage, rating, description }) {

    const [cartItems, setCartItems] = useContext(CartItemContext);
    const discountedPrice = (price - (discountPercentage * price / 100)).toFixed(2);
    let rateArr = [];
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating))
            rateArr.push(<div key={"star" + i} className="bi bi-star-fill"></div>);
        else if(i < Math.round(rating))
            rateArr.push(<div key={"star" + i} className="bi bi-star-half"></div>);
        else
            rateArr.push(<div key={"star" + i} className="bi bi-star"></div>);
    }

    const addToCart = (id, name, price) => {
        setCartItems([...cartItems, { id, name, price }]);
    };
    const btnDisable = cartItems.some((element) => {
        return element.id === id;
    });
    return (
        <div className="col mb-4">
            <div className="card h-100">
                {/* <!-- Sale badge-->
            {sale ? <div className="badge bg-dark text-white position-absolute">Sale</div> : ""} */}

                {/* <!-- Product image--> */}
                <img className="product-thumbnail card-img-top" src={thumbnail} alt={name} />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{name}</h5>
                        {/* //product description */}
                        <small className="text-muted">{description}</small>

                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    {/* <!-- Product ratiing--> */}
                    <div className="d-flex justify-content-center small text-warning mb-1">
                        {rateArr.map((val) => val)}
                    </div>
                    {/* <!-- Product price--> */}
                    <div className="mb-1">
                    {discountPercentage ? <span className="text-muted text-decoration-line-through px-2">${price}</span> : ""}
                    ${discountedPrice}
                    </div>
                    <div className="text-center">
                        <button className="btn btn-outline-dark mt-auto" disabled={btnDisable} onClick={() => addToCart(id, name, discountedPrice)}>
                            {btnDisable ? "Added in Cart" : "Add to cart"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
