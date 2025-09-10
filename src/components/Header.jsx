import { Link } from "react-router";
import { ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="h-20 bg-orange-300 flex items-center px- justify-between shadow-md px-[100px]">
      {/* Logo / Brand */}
      <div>
        <h1 className="text-3xl font-bold tracking-wide cursor-pointer">
          Hasib<span className="text-white">Store</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-8 text-lg font-medium">
        <Link to="/home" className="hover:text-white transition-colors">
          Home
        </Link>
        <Link to="/products" className="hover:text-white transition-colors">
          Shop
        </Link>
        <a href="#" className="hover:text-white transition-colors">
          Categories
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Contact
        </a>
      </nav>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        <button className="relative">
          <ShoppingCart className="w-6 h-6" />
          {/* Cart badge */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </button>
        <button className="flex items-center gap-2 bg-white text-orange-500 px-4 py-2 rounded-xl font-semibold hover:bg-orange-100 transition">
          <User className="w-5 h-5" />
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
