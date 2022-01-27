import React from "react";
import { useNavigate } from "react-router-dom";

function ProductHover({ product }) {
  console.log("ProductHover rendering...");
  const navigate = useNavigate();
  return (
    <div className="product-hover">
      <h3>{product.price} TK/-</h3>
      <div className="d-flex">
        <button className="mx-2">ADD TO CART</button>
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
