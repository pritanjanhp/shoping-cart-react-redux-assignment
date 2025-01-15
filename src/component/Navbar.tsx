import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../app/store";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";

const Navbar = () => {
  const cartLength = useSelector(
    (state: RootState) =>
      state.products.cart.filter(
        (item: { quantity: number }) => item.quantity > 0
      ).length
  );
  return (
    <nav className="z-10 bg-blue-500 justify-between h-20 p-5 shadow-xl fixed top-0 left-0 right-0 shadow-blue-400">
      {/* <h1>Navbar</h1> */}
      <ul className="flex justify-between px-5 items-center text-xl  text-white ">
        <div className="flex items-center gap-8">
          {/* <Link className="p-2 hover:bg-blue-400 rounded" to="/">
            Home
          </Link> */}

          <Link className="p-2 hover:bg-blue-400 rounded" to="/product">
            Home
            {/* Product */}
          </Link>
        </div>

        <div className="">
          <Link to="/favourite" className="">
            <FaHeart className="" />
          </Link>

          <Link to="/cart" className="p-2 relative flex items-center  rounded ">
            {cartLength === 0 ? (
              ""
            ) : (
              <h1 className="absolute bg-red-700 w-6 h-6 flex justify-center items-center rounded-full text-sm top-[-16px]">
                {cartLength}
              </h1>
            )}{" "}
            {<FaCartArrowDown className="mr-2 ml-3" />}
          </Link>
        </div>

        {/* <li>
          <Link to="/logout">Logout</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
