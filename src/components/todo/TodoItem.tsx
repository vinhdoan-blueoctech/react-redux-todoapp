import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { timerStatus, Todo, todoStatus } from "@/types";
import { PenTool, Trash } from "lucide-react";
import { Badge } from "../ui/badge";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { toast } from "sonner";
import {
  editTodo,
  removeTodo,
  toggleTodo,
  updateTodoStatus,
} from "@/redux/features/todo/slice";
import { selectTimerStatus } from "@/redux/features/timer/selectors";

const TodoItem = (todo: Todo) => {
  const dispatch = useDispatch();
  const timerCurrentStatus = useSelector(selectTimerStatus);
  const [text, setText] = useState<string>(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (timerCurrentStatus === timerStatus.TimesUp) {
      setIsEditing(false);
    }
  }, [timerCurrentStatus]);

  useEffect(() => {
    if (isEditing) {
      dispatch(updateTodoStatus(todoStatus.Running));
    } else {
      dispatch(updateTodoStatus(todoStatus.Idle));
    }
  }, [isEditing]);

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
    toast.success("Oh no! Task has been deleted");
  };

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleEditClick = () => {
    dispatch(editTodo({ id: todo.id, text: text }));
    toast.success("Oh no! Task has been edited");
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div
      key={todo.id}
      className="flex align-items-center items-center space-x-4 p-4 border-b
            hover:bg-muted/50"
    >
      <Checkbox checked={todo.completed} onCheckedChange={handleToggle} />

      <div
        className={`flex-1 align-middle justify-space-between ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {isEditing ? (
          <Input
            value={text}
            onChange={handleEdit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEditClick();
                setIsEditing(false);
              }
            }}
          />
        ) : (
          <span>{todo.text}</span>
        )}
      </div>

      <Badge variant={todo.completed ? "secondary" : "outline"}>
        {todo.completed ? "Completed" : "Pending"}
      </Badge>

      <div className="flex space-x-2">
        {isEditing ? (
          <Button
            variant="ghost"
            onClick={() => {
              handleEditClick();
              setIsEditing(false);
            }}
            className="w-4 h-8"
          >
            <PenTool />
          </Button>
        ) : (
          <Button
            variant="default"
            onClick={() => setIsEditing(true)}
            className="w-4 h-8"
          >
            <PenTool />
          </Button>
        )}
        <Button
          variant="destructive"
          className="w-4 h-8"
          onClick={handleRemove}
        >
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
