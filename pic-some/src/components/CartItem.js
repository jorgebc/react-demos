import React, {useContext} from "react";
import PropTypes from "prop-types";

import {Context} from "../contexts/Context";
import useHover from "../hooks/useHover";

export default function CartItem({item}) {

    const {removeFromCart} = useContext(Context);
    const [isHovered, ref] = useHover();

    const binClassname = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

    function handleOnBinClick() {
        removeFromCart(item.id);
    }

    return (
        <div className="cart-item">
            <i
                className={binClassname}
                onClick={handleOnBinClick}
                ref={ref}
            />
            <img src={item.url} width="130px" alt=""/>
            <p>
                {5.99.toLocaleString("es-ES",
                    {
                        style: "currency",
                        currency: "EUR"
                    }
                )}
            </p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}