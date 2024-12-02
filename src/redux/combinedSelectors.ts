import { createSelector } from "reselect";
import { selectTimerActiveState } from "@/redux/features/timer/selectors";
import { selectTodoStatus } from "@/redux/features/todo/selectors";
import { todoStatus } from "@/types";

export const selectIsDisabledComponents = createSelector(
  [selectTimerActiveState, selectTodoStatus],
  (isTimerActive, todoCurrentStatus): boolean =>
    isTimerActive && todoCurrentStatus === todoStatus.Running,
);
