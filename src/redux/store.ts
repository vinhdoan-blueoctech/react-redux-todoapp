import { configureStore, Tuple } from "@reduxjs/toolkit";
import todosReducer from "./features/todo/slice";
import  timerReducer  from "./features/timer/slice";

import createSagaMiddleware from 'redux-saga'
import rootTodoSaga from "./features/todo/sagas";
import rootTimerSaga from "./features/timer/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    todo: todosReducer,
    timer: timerReducer,
  },
  middleware: () => new Tuple(sagaMiddleware),
});
sagaMiddleware.run(rootTodoSaga);
sagaMiddleware.run(rootTimerSaga);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
