import { TimerState, timerStatus } from "@/types";

export const selectTimerTime = (state: { timer: TimerState }): number => state.timer.time;
export const selectTimerStatus = (state: { timer: TimerState }): timerStatus => state.timer.status;
export const selectTimerActiveState = (state: { timer: TimerState }): boolean => state.timer.isActive;


