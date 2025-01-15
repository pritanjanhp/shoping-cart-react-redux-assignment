import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { useEffect, useState } from "react";
import { addProductToCart, fetchPdt } from "../feature/CartSlice";
import { selectUser } from "../feature/UserSlice";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Product: React.FC = ({}) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const handleOpen = () => setIsOpen(!isOpen);

  // const [cart, setCart] = useState(false);
  // const handleCLick = () => {
  //   setCart(!cart);
  // };
  // console.log(cart);

  const user = useSelector(selectUser);
  const isLoggedIn = user.name !== "" && user.email !== " " && user.pwd !== " ";
  // console.log(isLoggedIn);

  const [click, setClick] = useState<{ [key: string]: boolean }>({});
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPdt());
    }
  }, [status, dispatch]);
  // console.log(items);

  if (status === "loading") {
    return (
      <h1 className="flex justify-center items-center h-screen text-xl">
        {/* Loading... */}
        <Loader />
      </h1>
    );
  }

  const handleAddToCart = (item: any) => {
    setClick((prev) => ({
      ...prev,
      [item.id]: true
    }));
    dispatch(addProductToCart(item));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
      {items.map((item) => (
        <article
          key={item.id}
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform  overflow-hidden"
        >
          <div className="relative">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-64 object-cover rounded-t-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
            />
            {/* <div className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-lg opacity-80">
              <button
                className="text-xl text-blue-600"
                onClick={() => {
                  dispatch(addProductToCart(item));
                }}
              >
                {" "}
                <FaHeart className="bg-red-400 transparent" />
                <i className="fas fa-cart-plus"></i>
              </button>
            </div> */}
          </div>

          <div className="p-6">
            <p className="text-xl font-semibold text-gray-800 truncate">
              {item.title}
            </p>
            <p className="text-lg font-medium text-gray-500 mt-2">
              ₹ {item.price}
            </p>

            {isLoggedIn ? (
              <button
                // onClick={() => {
                //   dispatch(addProductToCart(item));
                // }}
                onClick={() => handleAddToCart(item)}
                disabled={click[item.id]}
                className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                {click[item.id] ? "Added" : "Add to Cart"}
              </button>
            ) : (
              <Link to="/login">
                <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Add to Cart
                </button>
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Product;
