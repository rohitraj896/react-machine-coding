/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await fetch("https://dummyjson.com/products");

      const json = await data.json();
      setLoading(false);

      setProducts(prevProduct => [...prevProduct, ...json.products]);
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
    window.addEventListener("click", handleScroll);

    return () => {
      window.removeEventListener("click", handleScroll);
    };
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <div>{product.id}</div>
          <div>{product.title}</div>
          <div>{product.description}</div>
        </div>
      ))}
      {loading && <p>Loading....</p>}
    </div>
  );
};

export default InfiniteScroll;
