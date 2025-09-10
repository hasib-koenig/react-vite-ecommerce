import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AdminLayout, CustomerLayout, SellerLayout } from "./layouts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* customers layout starts here */}
        <Route path="/" element={<CustomerLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
        {/* customers layout ends here */}

        {/* admin layout starts here */}
        <Route path="/admin" element={<AdminLayout />} />
        {/* admin layout ends here */}

        {/* seller layout starts here */}
        <Route path="/seller" element={<SellerLayout />} />
        {/* seller layout ends here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
