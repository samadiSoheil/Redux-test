import { Provider } from "react-redux";
import "./App.css";
import Cake from "./components/Cake";
import { myStore } from "./Redux/store";
import Milk from "./components/Milk";
function App() {
  return (
    <Provider store={myStore}>
      <Cake />
      <Milk />
    </Provider>
  );
}

export default App;
