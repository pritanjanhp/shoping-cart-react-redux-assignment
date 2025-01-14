import { useDispatch } from "react-redux";
import { logout } from "../../feature/UserSlice";
import CartPage from "../../component/CartPage";

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
      <CartPage />
    </div>
  );
};

export default Logout;
