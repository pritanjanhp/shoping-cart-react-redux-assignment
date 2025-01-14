import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-center text-2xl font-bold mb-4">Cart App</h2>
      <Link to="/login">
        <button className="btn bg-blue-500 text-white p-2 rounded m-2">
          Go to Login
        </button>
      </Link>
      {/* <Link to="/addcart">
        <button className="btn bg-green-500 text-white p-2 rounded m-2 ">
          Go to Add Cart
        </button>
      </Link> */}
    </div>
  );
};

export default Button;
