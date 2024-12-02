import { put, fork, takeLatest, cancel, select } from "redux-saga/effects";
import { decrementTimer, resetTimer, startTimer, timerTimesup } from "./slice";
import { updateTodoStatus } from "../todo/slice";
import { selectTimerActiveState, selectTimerTime } from "./selectors";
import { todoStatus } from "@/types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function* tick() {
  try {
    while (true) {
      const time: number = yield select(selectTimerTime);
      if (time > 0) {
        yield put(decrementTimer());
        yield delay(1000);
      } else {
        yield put(timerTimesup());
        return;
      }
    }
  } catch (error) {
    console.error("Timer error:", error);
  }
}

function* timer(action: any){
  const isActive: boolean = yield select(selectTimerActiveState);
  if (!isActive) {
    return;
  }
  if (action.payload === todoStatus.Running) {
    yield put(startTimer());
    const timerTask = yield fork(tick); // TODO: find specific types of timerTask
    yield takeLatest(updateTodoStatus, function* (nextAction) {
      if (nextAction.payload !== todoStatus.Running) {
        yield cancel(timerTask);
        yield put(resetTimer());
      }
    });
  } else {
    yield put(resetTimer());
  }
}

export function* watchTodoStatus() {
  yield takeLatest(updateTodoStatus, timer);
}

export default function* rootSaga() {
  yield watchTodoStatus();
}
