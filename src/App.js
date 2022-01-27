import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ProductInfo from "./pages/ProductInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./stylesheets/layout.css";
import "./stylesheets/products.css";

function App() {
  console.log("App page redered...");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/productinfo/:productid" element={<ProductInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
