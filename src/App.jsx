import { Provider } from "react-redux";
import "./App.css";
import Cake from "./components/Cake";
import { myStore } from "./Redux/store";
import Milk from "./components/Milk";
import UsersList from "./components/UsersList";
function App() {
  return (
    <Provider store={myStore}>
      <Cake />
      <Milk />
      <hr />
      <UsersList />
    </Provider>
  );
}

export default App;
