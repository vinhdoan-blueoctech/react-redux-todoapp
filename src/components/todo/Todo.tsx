import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TodoList from "./TodoList";
import TodoAddSection from "./TodoAddSection";
import TodoFilterSearchBar from "./TodoFilterSearchBar";
import bg from "@/assets/bg.jpg";
import ImageWithHover from "./ImageWithHover";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodosRequest } from "@/redux/features/todo/slice";
import Timer from "../timer/Timer";
import { selectTimerStatus } from "@/redux/features/timer/selectors";
import TimesUpDialog from "../timer/TimesUpDialog";
import { useState, useEffect } from "react";
import { timerStatus } from "@/types";

const Todo = () => {
  const dispatch = useDispatch();
  const timerCurrentStatus = useSelector(selectTimerStatus);

  const [showTimesUpDialog, setShowTimesUpDialog] = useState(false);

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  useEffect(() => {
    if (timerCurrentStatus === timerStatus.TimesUp) {
      setShowTimesUpDialog(true);
    }
  }, [timerCurrentStatus]);

  const handleHideDialog = () => {
    setShowTimesUpDialog(false);
  };

  return (
    <div className="flex justify-center w-full">
      <Card className="w-3/4 px-8 py-4 mt-10">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-center">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Personal Todo App
              </h1>
              <ImageWithHover src={bg} />
            </div>
          </CardTitle>
          <CardDescription>
            Your personal <b>TODO</b> is right here!!! Please don't miss
            anything.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Timer />
          {showTimesUpDialog && <TimesUpDialog onClose={handleHideDialog} />}
          <TodoAddSection />
          <TodoFilterSearchBar />
          <TodoList />
        </CardContent>
        <CardFooter>
          <div className="mx-auto w-full">
            <p className="text-sm text-muted-foreground">Created by #dnv</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Todo;
