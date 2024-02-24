import { useEffect } from "react";
import fetchUsers from "../Redux/users/userActions";
import { useDispatch, useSelector } from "react-redux";

export default function UsersList() {
  const dispatch = useDispatch();
  const store = useSelector((data) => data.user);
  console.log(store);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return <div></div>;
}
