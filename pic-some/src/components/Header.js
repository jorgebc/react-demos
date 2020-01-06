import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../contexts/Context";

export default function Header() {

    const {isCartFilled} = useContext(Context);

    const cartClassName = isCartFilled() ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

    return (
        <header>
            <Link to="/">
                <h2>Pic Some</h2>
            </Link>

            <Link to="/cart">
                <i className={`${cartClassName} ri-fw ri-2x`}/>
            </Link>
        </header>
    )
}