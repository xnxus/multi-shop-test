import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, delItem } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.handleCart);

  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  const handleDelItem = (product) => {
    dispatch(delItem(product));
  };

  if (products.length === 0) {
    return (
      <div
        className="cartEmpty"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <h2>Card is Empty</h2>
        <p>Add at least one product to place your order</p>
        <Link to="/products">Return to the product page</Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      {products.map((product) => {
        return (
          <div className="card p-3 mb-3">
            <div className="card-body row">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-fit-contain"
                  width="200px"
                  height="200px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} for $ {product.qty * product.price}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDelItem(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAddItem(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
