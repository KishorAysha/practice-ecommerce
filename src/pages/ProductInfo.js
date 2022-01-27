import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayOut from "../components/LayOut";
import fireDB from "../fireConfig";

export default function ProductInfo() {
  const [product, setProduct] = useState();
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const productItem = await getDoc(
        doc(fireDB, "products", params.productid)
      );
      setProduct(productItem.data());
    } catch (error) {
      console.log(error);
    }
  }
  console.log("ProductInfo page redered...");
  return (
    <LayOut>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {product && (
              <div>
                <p>{product.name}</p>
                <img
                  src={product.imageURL}
                  alt=""
                  className="productInfo-img"
                />
                <hr />
                <p>{product.description}</p>
                <div className="d-flex justify-content-end my-3">
                  <button>ADD TO CART</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </LayOut>
  );
}
