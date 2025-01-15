import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/UserSlice";
import Login from "../loginLogout/Login";
import CartPage from "../component/CartPage";
import Product from "../component/Product";
import Navbar from "../component/Navbar";
import Logout from "../loginLogout/Logout";

const Routee = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = user.name !== "" && user.email !== " " && user.pwd !== " ";

  return (
    <div className="mt-20">
      <Router>
        {isLoggedIn && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center">
                {/* <h2>Home Page</h2> */}
                {/* <Login /> */}
                <Product />
              </div>
            }
          />

          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/product" /> : <Login />}
          ></Route>
          <Route
            path="/product"
            element={isLoggedIn ? <Product /> : <Navigate to="login" />}
          ></Route>
          <Route
            path="/cart"
            element={isLoggedIn ? <CartPage /> : <Navigate to="/login" />}
          />
          <Route path="/logout" element={<Logout />} />

          {/* <Route
            path="/login"
            element={<div>{isLoggedIn ? <Product /> : <Login />}</div>}
          /> */}
        </Routes>

        {/* {!isLoggedIn && (
          <Link to="/login">
            <button className="btn bg-blue-500 text-white p-2 rounded m-2">
              Go to Login
            </button>
          </Link>
        )} */}
      </Router>
    </div>
  );
};

export default Routee;
