import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./components/Todo";
import { Toaster } from "./components/ui/sonner";

function App() {
    return (
        <Provider store={store}>
            <body>
            <Toaster />
            <Todo></Todo>
            </body>
        </Provider>
    );
}

export default App;
