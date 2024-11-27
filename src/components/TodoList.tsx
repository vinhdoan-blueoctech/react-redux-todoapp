import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Filter, Todo, TodoState } from "@/types";
import { Card } from "./ui/card";

const TodoList = () => {
    const filteredTodos = useSelector((state: TodoState) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm.toLowerCase();

        return todos.filter((todo: Todo) => {
            const matchesFilter =
                (filter === Filter.Completed && todo.completed) ||
                (filter === Filter.Incomplete && !todo.completed) ||
                filter === Filter.All;

            const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchesFilter && matchesSearch;
        });
    });

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
