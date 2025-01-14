import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { removeProductFromCart, updateQuantity } from "../feature/CartSlice";
import { useEffect } from "react";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) =>
    state.products.cart.filter((item) => item.quantity > 0)
  );
  console.log("item is added "+cart)

  // const cart = useSelector((state: RootState) => state.products.items);
  // console.log(cart);
  // useEffect(() => {
  // const fetchData = async () => {
  //   dispatch
  // }
  //   },[])
  return (
    <section className="p-6 bg-white shadow-lg rounded-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
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
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: product.id,
                      quantity: product.quantity - 1
                    })
                  )
                }
                disabled={product.quantity <= 1}
              >
                -
              </button>
              <span className="px-4">{product.quantity}</span>
              <button
                className="p-2 bg-gray-200 rounded-md"
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: product.id,
                      quantity: product.quantity + 1
                    })
                  )
                }
              >
                +
              </button>
              <button
                className="ml-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => dispatch(removeProductFromCart(product.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default CartPage;
