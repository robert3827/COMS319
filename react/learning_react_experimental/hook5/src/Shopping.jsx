import React, { useState, useEffect } from "react";
import items from "./selected_products.json"


const Shop = () => {
    const [cart, setCart] = useState([]);               //Array of items in my cart
    const [cartTotal, setCartTotal] = useState(0);      //Total Cost starting at 0

    const addToCart = (el) => {
        setCart([...cart, el]);         // ... means whatever is inside the cart + el    --- i.e. +=
    };

    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
    };

    const listItems = items.map((el) => (
        <div key={el.id}>
            <img class=
                "img-fluid" src={el.image} width={150} /> <br />
            {el.title} <br />
            {el.category} <br />
            {el.price} <br />

            <button type="button" onClick={() => removeFromCart(el)}>-</button>{" "}
            <button type="button" variant="light" onClick={() => addToCart(el)}> + </button>
        </div>
    ));
    const cartItems = cart.map((el) => (
        <div key={el.id}>
            <img class=
                "img-fluid" src={el.image} width={150} />
            {el.title}
            ${el.price}
        </div>
    ));






    useEffect(() => {
        total();
        }, [cart]);

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
        totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
        };
            




    return (
        <div >
            {/* Make this one column */}
            <div>{listItems}</div>
            
            {/* Make this a second column */}
            <div>Items in Cart :</div>
            <div>{cartItems}</div>

            <div>Order total to pay :{cartTotal}</div>
            
        </div>
    );

       
}; export default Shop;