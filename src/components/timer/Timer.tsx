import { useSelector, useDispatch } from "react-redux";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import Clock from "./Clock";
import {
  selectTimerActiveState,
  selectTimerTime,
} from "@/redux/features/timer/selectors";
import { toggleTimerActiveState } from "@/redux/features/timer/slice";
import { selectTodoStatus } from "@/redux/features/todo/selectors";
import { todoStatus } from "@/types";

const Timer = () => {
  const dispatch = useDispatch();
  const time = useSelector(selectTimerTime);
  const timerCurrentActiveState = useSelector(selectTimerActiveState);
  const todoCurrentStatus = useSelector(selectTodoStatus);

  const handleToggle = (isChecked: boolean) => {
    dispatch(toggleTimerActiveState(isChecked));
  };

  return (
    <>
      <div className="flex items-center space-x-2">
        <Switch
          id="rush-mode"
          checked={timerCurrentActiveState}
          onCheckedChange={handleToggle}
          disabled={todoCurrentStatus === todoStatus.Running}
        />
        <Label htmlFor="rush-mode">Rush Mode</Label>
      </div>
      {timerCurrentActiveState && <Clock time={time} />}
    </>
  );
};

export default Timer;
