import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./components/todo/Todo";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <Todo></Todo>
    </Provider>
  );
}

export default App;
