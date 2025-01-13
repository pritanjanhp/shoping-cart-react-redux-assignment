// import { useState } from "react";
// import Login from "./loginLogout/Login.tsx";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/UserSlice.tsx";
import Login from "./loginLogout/Login.tsx";
import Product from "./Product.tsx";

const CartApp = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = user.name !== "" && user.email !== " " && user.pwd !== " ";

  return (
    <div className="flex flex-col justify-center items-center">
      <div> {isLoggedIn ? <Product /> : <Login />}</div>
      {/* <h2>CartApp Products</h2> */}
      {/* {isLogin ? (
        <Login />
      ) : (
        <div>
          <button
            className="border border-red-500"
            onClick={() => setIsLogin(!isLogin)}
          >
            please login
          </button>
        </div>
      )} */}
      {/* <Product /> */}
    </div>
  );
};

export default CartApp;
