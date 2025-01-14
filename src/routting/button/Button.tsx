import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/UserSlice";
import Login from "../../loginLogout/Login";
import CartPage from "../../component/CartPage";
import Product from "../../component/Product";
import Navbar from "../../component/Navbar";
import Logout from "../../loginLogout/Logout";

const Button = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = user.name !== "" && user.email !== " " && user.pwd !== " ";

  return (
    <div className="mt-20">
      {/* {isLoggedIn && <Navbar />} */}
      {/* <h2 className="text-center text-2xl font-bold mt-5 mb-2">Cart App</h2> */}
      <BrowserRouter>
        {isLoggedIn && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center">
                <h2>Home Page</h2>
                {/* <Login /> */}
              </div>
            }
          />
          <Route
            path="/login"
            element={<div>{isLoggedIn ? <Product /> : <Login />}</div>}
          />
          <Route path="/product" element={<Product />}></Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        {!isLoggedIn && (
          <Link to="/login">
            <button className="btn bg-blue-500 text-white p-2 rounded m-2">
              Go to Login
            </button>
          </Link>
        )}
      </BrowserRouter>
    </div>
  );
};

export default Button;
