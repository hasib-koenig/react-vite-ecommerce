import Header from "../components/customer/Header";
import Footer from "../components/customer/Footer";
import { Outlet } from "react-router";

const CustomerLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default CustomerLayout;
