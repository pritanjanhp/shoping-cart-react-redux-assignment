import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-5 shadow-2xl shadow-blue-300">
      {/* <h1>Navbar</h1> */}
      <ul className="flex justify-around text-xl text-white ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">cart</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
