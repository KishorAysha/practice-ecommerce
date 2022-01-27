import React from "react";
import Header from "./Header";
// import Footer from "./Footer";

const LayOut = ({ children }) => {
  console.log("LayOut page redered...");
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default LayOut;
