/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Pagination = () => {
  const LIMIT = 10;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=title,price,thumbnail,description`
    );
    const json = await data.json();
    setProducts(json.products);
    setNoOfPages(json.total / LIMIT);
  };
  return (
    <>
      <div className="flex flex-wrap">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="p-10 cursor-pointer flex justify-center gap-2">
        {currentPage > 0 && (
          <span onClick={() => setCurrentPage(currentPage => currentPage - 1)}>
            &larr; Prev
          </span>
        )}
        {[...Array(noOfPages).keys()].map(pN => (
          <span
            className={`text-xl ${pN === currentPage && "font-bold underline"}`}
            key={pN}
            onClick={() => setCurrentPage(pN)}
          >
            {pN + 1}
          </span>
        ))}
        {currentPage < noOfPages - 1 && (
          <span onClick={() => setCurrentPage(currentPage => currentPage + 1)}>
            Next &rarr;
          </span>
        )}
      </div>
    </>
  );
};

export default Pagination;
