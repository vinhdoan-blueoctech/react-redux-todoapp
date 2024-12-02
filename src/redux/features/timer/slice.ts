import { TimerState, timerStatus } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 10,
  status: timerStatus.Idle,
  isActive: false,
} as TimerState;

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.time = 10;
      state.status = timerStatus.Running;
    },
    resetTimer: (state) => {
      state.time = 10;
      state.status = timerStatus.Idle;
    },
    decrementTimer: (state) => {
      state.time -= 1;
      console.log(state.time);
    },
    timerTimesup: (state) => {
      state.status = timerStatus.TimesUp;
    },
    toggleTimerActiveState: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startTimer, decrementTimer, resetTimer, timerTimesup, toggleTimerActiveState } =
  timerSlice.actions;

export default timerSlice.reducer;
