import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "../Redux/milk/milkActions.js";

export default function Milk() {
  const store = useSelector((data) => data.milk);
  console.log(store);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Milk number {store.numOfMilk}</h1>
      <button onClick={() => dispatch(buyMilk(1))}>buy milk</button>
    </div>
  );
}
