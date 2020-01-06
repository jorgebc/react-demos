import React, {useContext} from "react";
import PropTypes from 'prop-types';

import {Context} from "../contexts/Context";
import useHover from "../hooks/useHover";

function Image({image, classname}) {

    const {url} = image;

    const [isHovered, ref] = useHover();
    const {toggleFavorite, addToCart, isInCart, removeFromCart} = useContext(Context);

    const heartClassname = image.isFavorite ? "ri-heart-fill" : "ri-heart-line";
    const imageInCart = isInCart(image.id);
    const cartClassname = imageInCart ? "ri-shopping-cart-fill" : "ri-add-circle-line";

    function handleOnHeartClick() {
        toggleFavorite(image.id);
    }

    function handleOnCartClick() {
        if (!imageInCart) {
            addToCart(image);
        } else {
            removeFromCart(image.id);
        }
    }

    return (
        <div
            className={`${classname} image-container`}
            ref={ref}
        >
            <img src={url} className="image-grid" alt=""/>
            <div style={{display: isHovered || image.isFavorite ? "block" : "none"}}>
                <i
                    className={`${heartClassname} favorite`}
                    onClick={handleOnHeartClick}
                />
            </div>
            <div style={{display: isHovered || imageInCart ? "block" : "none"}}>
                <i
                    className={`${cartClassname} cart`}
                    onClick={handleOnCartClick}
                />
            </div>
        </div>
    )
}

Image.propTypes = {
    image: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired
    }),
    className: PropTypes.string
};

export default Image