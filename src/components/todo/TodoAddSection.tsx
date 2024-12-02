import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { addTodo, updateTodoStatus } from "@/redux/features/todo/slice";
import { timerStatus, todoStatus } from "@/types";
import { selectTodoStatus } from "@/redux/features/todo/selectors";
import { selectTimerStatus } from "@/redux/features/timer/selectors";

const TodoAddSection = () => {
  const dispatch = useDispatch();
  const todoCurrentStatus = useSelector(selectTodoStatus);
  const timerCurrentStatus = useSelector(selectTimerStatus);
  const [newTodoText, setNewTodoText] = useState<string>("");

  useEffect(() => {
    if (timerCurrentStatus === timerStatus.TimesUp) {
      setNewTodoText("");
    }
  }, [timerCurrentStatus]);

  useEffect(() => {
    if (newTodoText.trim().length > 0) {
      if (todoCurrentStatus !== todoStatus.Running) {
        dispatch(updateTodoStatus(todoStatus.Running));
      }
    } else {
      if (todoCurrentStatus !== todoStatus.Idle) {
        dispatch(updateTodoStatus(todoStatus.Idle));
      }
    }
  }, [newTodoText]);

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
    <div className="mt-4">
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
