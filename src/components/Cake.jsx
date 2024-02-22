import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../Redux/cake/cakeActions";

export default function Cake() {
  const store = useSelector((date) => date.cake);
  console.log(store);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Cake number : {store.numOfCake}</h1>
      <button onClick={() => dispatch(buyCake(1))}>buy cake</button>
    </div>
  );
}
