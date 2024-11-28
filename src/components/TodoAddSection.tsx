import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/actions";
import { toast } from "sonner";

const TodoAddSection = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState<string>("");

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText && newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
      toast.success("Task has been created");
    } else {
      console.log("Please enter a valid task.");
      toast.error("Task has not been created");
    }
  };

  return (
    <div>
      <b>Add Task</b>
      <div className="flex w-full justify-self-center items-center space-x-2 h-12 mt-2">
        <Input
          id="addTodoInput"
          placeholder="Start your day with a TODO"
          className="h-full focus:text-lg placeholder:text-lg"
          value={newTodoText}
          onChange={(e) => {
            setNewTodoText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodoClick();
            }
          }}
        />
        <Button
          type="submit"
          className="h-full w-12 flex items-center justify-center"
          onClick={handleAddTodoClick}
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default TodoAddSection;
