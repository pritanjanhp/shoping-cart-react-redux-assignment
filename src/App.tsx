import { Route, Routes, BrowserRouter } from "react-router-dom";
import CartApp from "./component/CartApp";
import Button from "./routting/button/Button";
import Login from "./component/loginLogout/Login";
import AddCart from "./component/AddCart";
import Logout from "./component/loginLogout/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./feature/UserSlice";
import Product from "./component/Product";

const App = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = user.name !== "" && user.email !== " " && user.pwd !== " ";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/cartapp" element={<CartApp />} />
        <Route
          path="/Login"
          // element={<div> {"hi you are in"}</div>}
          element={<div> {isLoggedIn ? <CartApp /> : <Login />}</div>}
        />
        {/* <Route path="/addcart" element={<AddCart />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
