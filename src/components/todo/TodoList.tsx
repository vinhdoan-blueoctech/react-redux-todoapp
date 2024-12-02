import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Todo } from "@/types";
import { Card } from "../ui/card";
import { selectFilteredAndSearchedTodos } from "@/redux/features/todo/selectors";

const TodoList = () => {
  const filteredTodos = useSelector(selectFilteredAndSearchedTodos);

  return (
    <div className="mt-4">
      <b>Tasks List</b>
      <div className="mt-2 max-h-[40vh] overflow-y-auto">
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
