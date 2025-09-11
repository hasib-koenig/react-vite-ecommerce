import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router";
import { CustomerLayout, AdminLayout, SellerLayout } from "./layouts";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Counter from "./components/counter";
import { inc, dec } from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Counter />
      <button
        onClick={() => {
          dispatch(dec());
        }}
      >
        Dec
      </button>
    </>
  );
};

export default App;
