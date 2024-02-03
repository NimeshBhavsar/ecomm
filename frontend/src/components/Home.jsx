import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../slices/cartSlice";
import { useGetAllProductsQuery } from "../slices/productsApi";


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
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <img src={imagePath} alt="4star" className="ratingstar" />
                    {/* <span>{product.desc}</span> */}
                    <span className="price">Price: ₹{product.amount}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
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
