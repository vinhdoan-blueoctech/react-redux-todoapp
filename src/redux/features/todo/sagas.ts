import { all, call, put, takeEvery } from "redux-saga/effects";
import { fetchTodosFailure, fetchTodosRequest, fetchTodosSuccess } from "./slice";
import { handleFetchTodo } from "@/utils";
import { Todo } from "@/types";

function* fetchTodos()  {
  try {
    const todos: Todo[] = yield call(handleFetchTodo);
    yield put(fetchTodosSuccess(todos));
  } catch (error) {
    yield put(fetchTodosFailure());
  }
}

function* watchTodoFetchAsync() {
  yield takeEvery(fetchTodosRequest, fetchTodos);
}

export default function* rootSaga() {
  yield all([watchTodoFetchAsync()]);
}
