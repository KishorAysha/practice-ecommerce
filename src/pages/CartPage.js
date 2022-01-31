import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import LayOut from "../components/LayOut";

export default function CartPage() {
  console.log("Cart page redered...");
  const { cartItems } = useSelector((state) => state.cartReducer);

  const [Tamount, setTamount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let amount = 0;
    cartItems.forEach((cartItem) => {
      amount = amount + cartItem.price;
    });
    setTamount(amount);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };
  return (
    <LayOut>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <img src={item.imageURL} alt="" width="70" height="70" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <FaTrash onClick={() => deleteFromCart(item)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className=" d-flex justify-content-end mt-3">
        <h1 className="totalAmount">Total amount = {Tamount}</h1>
      </div>
      <div className=" d-flex justify-content-end mt-3">
        <button>PLACE ORDER</button>
      </div>
    </LayOut>
  );
}
