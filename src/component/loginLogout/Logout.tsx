import { useDispatch } from "react-redux";
import { logout } from "../../feature/UserSlice";
import AddCart from "../AddCart";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="border border-red-500 bg-slate-500"
      >
        Logout
      </button>
      <AddCart />
    </div>
  );
};

export default Logout;
