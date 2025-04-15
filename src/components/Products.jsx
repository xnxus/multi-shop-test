import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setData(products);
      setFilter(products);
      setLoading(false);
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filter.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filter.length / itemsPerPage);

  const Loading = () => {
    return Array.from({ length: itemsPerPage }).map((_, i) => (
      <div className="col-md-3 mb-4" key={i}>
        <Skeleton height={350} />
      </div>
    ));
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pd-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setFilter(data);
              setCurrentPage(1);
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        {currentItems.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 text-center p-4">
              <img
                src={product.image}
                className="card-img-top object-fit-contain"
                alt={product.title}
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title mb-0 text-truncate">
                  {product.title}
                </h5>
                <p className="card-text lead fw-bold">${product.price}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-outline-dark"
                >
                  More...
                </Link>
              </div>
            </div>
          </div>
        ))}
        <nav>
          <ul className="pagination justify-content-center">
            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="display-6 fw-bolder text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
