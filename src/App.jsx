import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="px-[100px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
