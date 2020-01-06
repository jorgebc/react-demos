import React, {useEffect, useState} from "react";

const Context = React.createContext();

function ContextProvider({children}) {

    const [photos, setPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const photosUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    useEffect(() => {
        fetch(photosUrl)
            .then(response => response.json())
            .then(data => setPhotos(data));
    }, []);

    function toggleFavorite(photoId) {
        setPhotos(prevPhotos => {
            return prevPhotos.map(photo => {
                if (photo.id === photoId) {
                    photo.isFavorite = !photo.isFavorite;
                }
                return photo;
            });
        });
    }

    function addToCart(photo) {
        setCartItems(prevCart => [...prevCart, photo]);
    }

    function isInCart(photoId) {
        return cartItems.some(photo => photo.id === photoId);
    }

    function removeFromCart(photoId) {
        const updatedCart = cartItems.filter(photo => {
            return photo.id !== photoId;
        });
        setCartItems(updatedCart);
    }

    function isCartFilled() {
        return cartItems.length > 0;
    }

    function calculateCartTotalAmount() {
        return cartItems.reduce((total, item) => total + 5.99, 0)
            .toLocaleString("es-ES", {
                style: "currency",
                currency: "EUR"
            });
    }

    function emptyCart() {
        setCartItems([]);
    }

    return (
        <Context.Provider value={
            {
                photos,
                toggleFavorite,
                cartItems,
                addToCart,
                isInCart,
                removeFromCart,
                isCartFilled,
                calculateCartTotalAmount,
                emptyCart
            }
        }>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}