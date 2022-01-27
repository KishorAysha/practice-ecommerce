import React, { useState, useEffect } from "react";
import LayOut from "../components/LayOut";
import { collection, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import ProductHover from "../components/ProductHover";
import ProductContent from "../components/ProductContent";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  console.log("Home page redered...");
  console.log(products);
  const getData = async () => {
    try {
      const products = await getDocs(collection(fireDB, "products"));
      const productsData = [];
      products.forEach((product) => {
        // doc.data() is never undefined for query doc snapshots
        const obj = {
          id: product.id,
          ...product.data(),
        };
        productsData.push(obj);
      });
      setProducts(productsData);
    } catch (error) {
      console.log(error);
    }
  };
  // const getDataToFire = () => {
  // Add a new document with a generated id.
  // try {
  // products.map(async (product) => {
  // await addDoc(collection(fireDB, "products"), product);
  // });
  // } catch (error) {
  // console.log(error);
  // }
  // };
  return (
    <LayOut>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-4" key={product.id}>
                <div className="m-2 p-1 boxshadow position-relative">
                  <ProductContent product={product} />
                  <ProductHover product={product} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </LayOut>
  );
}
export default React.memo(HomePage);
