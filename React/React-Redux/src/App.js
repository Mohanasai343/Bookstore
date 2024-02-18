import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./component/Cart";
import BookStore from "./component/BookStore/BookStore";

function App() {
  return (
    <Provider store={store}>
      <BookStore />
    </Provider>
  );
}

export default App;
