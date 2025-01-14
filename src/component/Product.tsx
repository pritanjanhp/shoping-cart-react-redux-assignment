import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { useEffect } from "react";
import { addProductToCart, fetchPdt } from "../feature/CartSlice";

const Product: React.FC = ({}) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const handleOpen = () => setIsOpen(!isOpen);

  // const [cart, setCart] = useState(false);
  // const handleCLick = () => {
  //   setCart(!cart);
  // };
  // console.log(cart);
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
        Loading...
      </h1>
    );
  }

  return (
    <div className="flex flex-wrap mx-auto w-full h-auto space-x-10 justify-center p-10 space-y-7 ">
      {items.map((item) => (
        <article
          className="flex flex-col items-center justify-center p-4 w-72 shadow-lg shadow-black bg-red-50 hover:bg-white"
          key={item.id}
        >
          <img
            src={item.images[0]}
            alt={item.title}
            className="bg-slate-400 w-48 h-49 rounded-md"
          />

          <div className="flex flex-col items-center space-y-3 mt-4">
            {/* <div className="m-1 p-1 flex-row justify-evenly md-full w-full"> */}
            <p className="italic">{item.title}</p>
            <p> Price: ₹ {item.price}</p>
            <p> Rating: {item.rating}</p>
            <p> Stock: {item.stock}</p>
            <p> Brand: {item.brand}</p>

            <button
              className="p-2 w-35 bg-blue-500 text-white rounded-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-30"
              onClick={() => {
                dispatch(addProductToCart(item));
                // console.log("adding to cart", item);
              }}
            >
              Add to Cart
            </button>

            {/* <NavLink
              to="/cart"
              className="p-2 w-35 bg-blue-500 text-white rounded-lg"
            >
              View Cart
            </NavLink> */}

            {/* <button
                className="p-2 m-1 w-35 justify-center bg-blue-500 text-white rounded-md"
                onClick={handleOpen}
              >
                {isOpen ? "close Cart" : "view Cart"}
              </button> */}
            {/* {cart && <CartPage />} */}
            {/* </div> */}
          </div>
          {/* {isOpen && <CartPage/>} */}
        </article>
      ))}
    </div>
  );
};

export default Product;
