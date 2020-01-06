import React, {useContext, useState} from "react";
import {Context} from "../contexts/Context";
import CartItem from "../components/CartItem";

export default function Cart() {

    const {cartItems, calculateCartTotalAmount, isCartFilled, emptyCart} = useContext(Context);
    const items = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ));

    const totalAmount = calculateCartTotalAmount();
    const DEFAULT_BUTTON_TEXT = "Place order";
    const [buttonText, setButtonText] = useState(DEFAULT_BUTTON_TEXT);

    function handleOnClick() {
        setButtonText("Ordering...");
        if (isCartFilled()) {
            setTimeout(() => {
                console.log("Order placed!");
                emptyCart();
                setButtonText(DEFAULT_BUTTON_TEXT);
            }, 3000);
        }
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {items}
            <p className="total-cost">Total: {totalAmount}</p>
            <div className="order-button">
                {
                    isCartFilled() ?
                        <button onClick={handleOnClick}>{buttonText}</button>
                        :
                        <p>No items in the cart</p>
                }
            </div>
        </main>
    )
}