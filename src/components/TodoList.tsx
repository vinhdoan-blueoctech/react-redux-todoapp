import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Todo } from "@/types";
import { Card } from "./ui/card";
import { selectFilteredBySearch } from "@/redux/selectors";


const TodoList = () => {
    // const filteredTodos = useSelector(todosSelectors.selectFilteredAndSearchedTodos);
    const filteredTodos = useSelector(selectFilteredBySearch);


    return (
        <div className="mt-4">
            <b>Tasks List</b>
            <div className="mt-2">
                {filteredTodos.length === 0 ? (
                    <p>No todos found.</p>
                ) : (
                    <Card>
                        {filteredTodos.map((todo: Todo) => (
                            <TodoItem key={todo.id} {...todo} />
                        ))}
                    </Card>
                )}
            </div>
        </div>
    );
};

export default TodoList;
