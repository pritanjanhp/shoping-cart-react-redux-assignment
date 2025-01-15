import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../feature/UserSlice";
import { AppDispatch } from "../app/store";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ name, email, pwd }));
    console.log("first");
  };
  // console.log("second");
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
            type="text"
            placeholder="enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="enter your password"
            onChange={(e) => setPwd(e.target.value)}
          />
          <div className="flex items-center">
            <input className="mr-2" type="checkbox" />
            <label className="text-sm text-gray-600">Remember me</label>
          </div>
          <button
            className="w-full p-3 bg-blue-500 text-white rounded-md  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
