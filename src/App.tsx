import { Route, Routes } from "react-router";
import { Header } from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { Speakers } from "./pages/Speakers";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/:slug" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
