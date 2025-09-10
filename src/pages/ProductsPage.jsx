import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product/Product";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const BuildProducts = () => {
    return (
      <div className="flex flex-wrap gap-10">
        {products.map((item) => (
          <Product item={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="py-[50px]">
      {loading ? <h2>Loading...</h2> : error ? "error..." : <BuildProducts />}
    </div>
  );
};

export default ProductPage;
