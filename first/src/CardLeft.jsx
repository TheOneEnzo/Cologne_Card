import React from "react";


export default function CardLeft(){
    return(
        <div className="left">
            <p className="title">
            Perfume
            </p>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p className="information">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
            Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="price">
                <p className="highlighted">$149.99</p>
                <p className="crossedOut">$169.99</p>
            </div>
            <button><span id="cart"><img src="../public/icon-cart.svg" alt="" /></span>Add to cart</button>
        </div>
    )
}