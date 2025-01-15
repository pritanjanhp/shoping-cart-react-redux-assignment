import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { removeProductFromCart, updateQuantity } from "../feature/CartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) =>
    state.products.cart.filter((item) => item.quantity > 0)
  );
  const [cnt, setCnt] = useState(cart.length);
  // console.log("added " + cart);

  // const cart = useSelector((state: RootState) => state.products.items);
  // console.log(cart);
  // useEffect(() => {
  // const fetchData = async () => {
  //   dispatch
  // }
  //   },[])

  let handlePrice = () => {
    return cart.reduce((total, product) => {
      return Math.round((total + product.price * product.quantity) * 100) / 100;
    }, 0);
  };

  let discount = () => {
    if (handlePrice() > 100) return Math.round(handlePrice() * 0.2 * 100) / 100;
    else if (handlePrice() > 200) return Math.round(handlePrice() * 0.3);
    else return Math.round(handlePrice() * 0.4);
  };

  // console.log(cart.length);
  return (
    <section className="p-6 bg-white shadow-lg rounded-md w-full h-full">
      <h2 className="flex justify-center text-2xl font-bold mb-5 p-3 ">
        Your Cart
      </h2>
      {cart.length === 0 ? (
        <div className="flex flex-col text-center justify-center">
          <p className="">Your cart is empty!</p>
          <Link to="/product">
            <button className="btn bg-blue-500 text-white p-2 rounded m-2">
              shop now
            </button>
          </Link>
        </div>
      ) : (
        cart.map((product) => (
          <div
            className="flex items-center justify-between border-b py-2"
            key={product.id}
          >
            <div className="flex items-center space-x-4">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg">{product.title}</h3>
                <p className="text-gray-600">₹{product.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="p-2 bg-gray-200 rounded-lg"
                onClick={() => {
                  dispatch(
                    updateQuantity({
                      id: product.id,
                      quantity: product.quantity - 1
                    })
                  );
                  setCnt(cnt - 1);
                }}
              >
                -
              </button>
              <span className="px-4">{product.quantity}</span>
              <button
                className="p-2 bg-gray-200 rounded-md"
                onClick={() => {
                  dispatch(
                    updateQuantity({
                      id: product.id,
                      quantity: product.quantity + 1
                    })
                  );
                  setCnt(cnt + 1);
                }}
                disabled={product.stock <= product.quantity}
              >
                +
              </button>
              <button
                // className="ml-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                className="p-2 w-35 bg-blue-500 text-white rounded-lg"
                onClick={() => {
                  dispatch(removeProductFromCart(product.id));
                  setCnt(cnt - product.quantity);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        // <div className="flex text-xl justify-between mt-5 font-bold  ">
        <div className="flex justify-between mt-16 font-bold fixed bottom-0 left-0 right-0 bg-blue-400 p-4">
          <div className="text-l">
            <span>Total items </span>
            <span>{cnt}</span>
          </div>
          <div className="ml-auto">
            <div className="flex flex-col items-end">
              {/* <div>
            <span>Total Item : </span>
            <span>{cart.length}</span>
          </div> */}
              <div>
                <span>Orignal Price : ₹ </span>
                <span className="line-through"> {handlePrice()} </span>
              </div>
              <div className="text-xl">
                <span>Discounted Price : </span>
                <span> ₹ {discount()} </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;
