import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../slices/cartSlice";
import { useGetAllProductsQuery } from "../slices/productsApi";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};


const Home = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();
  const imagePath = process.env.PUBLIC_URL + '/star4.png';
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };



  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openPopup = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedProduct(null);
    setShowPopup(false);
  };

  const handleCloseClick = (event) => {
    // Close the popup only if the click is outside the popup content
    if (event.target.classList.contains('popup')) {
      closePopup();
    }
  };



  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <h2>New Arrivals</h2>
          <div className="products">

            {data &&
              data?.map((product) => (
                <div key={product.id} className="product">
                  <div className="titlediv">
                    <h3>{product.title}</h3>
                  </div>
                  <img src={product.image} alt={product.name} onClick={() => openPopup(product)} />
                  <div className="details">
                    <img src={imagePath} alt="4star" className="ratingstar" />
                    {/* <span>{product.desc}</span> */}
                    <span className="price">Price: ₹{product.amount}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>

                  {showPopup && selectedProduct && selectedProduct.id === product.id && (
                    <div className="popup" onClick={handleCloseClick}>
                      <div className="popup-content">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <h2>{selectedProduct.title}</h2>
                        <img src={selectedProduct.image} alt={selectedProduct.name} />
                        {/* Display other product details like description, rating, price, etc. */}
                        <span>Description: {selectedProduct.description}</span>
                        <span>Rating: {selectedProduct.rating}</span>
                        <span>Price: ₹{selectedProduct.amount}</span>
                        {/* Add to Cart button or any other actions */}
                        <button onClick={() => handleAddToCart(selectedProduct)}>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  )}


                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};
export default Home;
