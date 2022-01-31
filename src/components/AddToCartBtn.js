import React from "react";
import { useDispatch } from "react-redux";
export default function AddToCartBtn({ product }) {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <button className="mx-2" onClick={() => addToCart(product)}>
      ADD TO CART
    </button>
  );
}
