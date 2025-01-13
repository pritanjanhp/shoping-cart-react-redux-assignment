// import { Link } from "react-router-dom";
// import Login from "../../component/loginLogout/Login";
// import AddCart from "../../component/AddCart";

// const Button = () => {
//   return (
//     <div>
//       {/* <h2>Button</h2> */}
//       <Link to="/login">
//         <Login />
//       </Link>
//       <Link to="/addcart">
//         <AddCart />
//       </Link>
//     </div>
//   );
// };

// export default Button;

import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-4">
        Welcome to the App
      </h2>
      <Link to="/login">
        <button className="btn bg-blue-500 text-white p-2 rounded m-2">
          Go to Login
        </button>
      </Link>
      {/* <Link to="/addcart">
        <button className="btn bg-green-500 text-white p-2 rounded m-2">
          Go to Add Cart
        </button>
      </Link> */}
    </div>
  );
};

export default Button;
