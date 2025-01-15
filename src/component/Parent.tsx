import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { addProductToCart } from "../feature/CartSlice";
import { selectUser } from "../feature/UserSlice";

const Parent = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = user.name !== "" && user.email !== " " && user.pwd !== " ";
  const [click, setClick] = useState<{ [key: string]: boolean }>({});
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (item: any) => {
    setClick((prev) => ({
      ...prev,
      [item.id]: true
    }));
    dispatch(addProductToCart(item));
  };
  return;
};

export default Parent;
