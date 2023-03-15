import React from "react";
import itemList from "../data/itemlist.json"
import { ShoppingCart } from "./ShoppingCart";
import { Product } from "./Product";


function Main(){
    return(
        <>
        <ShoppingCart />
        <section className="py-3">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center">
                {
                    itemList.map((data) => (
                        <Product key={data.id} {...data}/>
                    ))
                }
                </div>
            </div>
        </section>
        </>
    );
}

export { Main }