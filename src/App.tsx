import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./components/Todo";
import { Toaster } from "./components/ui/sonner";
import { useEffect } from "react";

function App() {
  const handleFetchTodo = async () => {
    const response = await fetch("http://localhost:5173/todo.json").then(
      (res) => res.json()
    );

    console.log("response", response);
  };
  useEffect(() => {
    handleFetchTodo();
  }, []);
  return (
    <Provider store={store}>
      <Toaster />
      <Todo></Todo>
    </Provider>
  );
}

export default App;
