import React, {useEffect, useState} from "react";

const Context = React.createContext();

function ContextProvider({children}) {

    const [photos, setPhotos] = useState([]);
    const [cartItems, setCart] = useState([]);

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
        setCart(prevCart => [...prevCart, photo]);
    }

    function isInCart(photoId) {
        return cartItems.some(photo => photo.id === photoId);
    }

    function removeFromCart(photoId) {
        const updatedCart = cartItems.filter(photo => {
            return photo.id !== photoId;
        });
        setCart(updatedCart);
    }

    return (
        <Context.Provider value={{photos, toggleFavorite, cartItems, addToCart, isInCart, removeFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}