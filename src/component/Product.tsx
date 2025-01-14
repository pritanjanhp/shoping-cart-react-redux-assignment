import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { useEffect } from "react";
import { addProductToCart, fetchPdt } from "../feature/CartSlice";
import { NavLink } from "react-router-dom";

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
    <section className="mx-auto w-100 h-14 justify-center m-6 p-10 space-y-9 ">
      {items.map((item) => (
        <article
          className="flex justify-center items-center space-x-4 shadow-2xl bg-red-50"
          key={item.id}
        >
          <img
            src={item.images[0]}
            alt={item.title}
            className="bg-slate-400 w-48 h-49 rounded-md"
          />

          <div className="w-50 h-50 flex md-full p-1 m-3">
            <div className="m-1 p-1 flex-row justify-evenly md-full w-full">
              <p className="italic m-1 p-1">{item.title}</p>
              <p className="p-1 m-1"> Price: ₹ {item.price}</p>
              <p className="p-1 m-1"> Rating: {item.rating}</p>
              <p className="p-1 m-1"> Stock: {item.stock}</p>
              <p className="p-1 m-1"> Brand: {item.brand}</p>

              <button
                className="p-2 m-1 w-35 justify-center bg-blue-500 text-white rounded-lg"
                onClick={() => {
                  dispatch(addProductToCart(item));
                  // console.log("adding to cart", item);
                }}
              >
                Add to Cart
              </button>

              <NavLink
                to="/cart"
                className="p-2 m-1 w-35 bg-blue-500 text-white rounded-lg"
              >
                View Cart
              </NavLink>

              {/* <button
                className="p-2 m-1 w-35 justify-center bg-blue-500 text-white rounded-md"
                onClick={handleOpen}
              >
                {isOpen ? "close Cart" : "view Cart"}
              </button> */}
              {/* {cart && <AddCart />} */}
            </div>
          </div>
          {/* {isOpen && <AddCart />} */}
        </article>
      ))}
    </section>
  );
};

export default Product;
