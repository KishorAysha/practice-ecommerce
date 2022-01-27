import React from "react";

function ProductContent({ product }) {
  console.log("ProductContent rendering...");
  return (
    <div className="product-content">
      <p>{product.name}</p>
      <div className="img-center">
        <img src={product.imageURL} alt="" className="product-img" />
      </div>
    </div>
  );
}
export default ProductContent;
