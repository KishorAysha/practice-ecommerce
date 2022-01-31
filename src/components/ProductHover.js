import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductHover({ product }) {
  console.log("ProductHover rendering...");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="product-hover">
      <h3>{product.price} TK/-</h3>
      <div className="d-flex">
        <button className="mx-2" onClick={() => addToCart(product)}>
          ADD TO CART
        </button>
        <button
          onClick={() => {
            navigate(`/productinfo/${product.id}`);
          }}
        >
          VIEW
        </button>
      </div>
    </div>
  );
}
export default ProductHover;
