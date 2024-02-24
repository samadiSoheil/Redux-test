import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userType";
import axios from "axios";

export default function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_REQUEST });
    axios
      .get("https://jsonplaceholder.typicode.com/usersqq")
      .then((res) => dispatch({ type: FETCH_USER_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: FETCH_USER_FAILURE, payload: err.message }));
  };
}
