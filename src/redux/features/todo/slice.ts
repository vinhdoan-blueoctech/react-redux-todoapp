import { Filter, Todo, todoState, todoStatus } from "@/types";
import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  todos: [] as Todo[],
  filter: Filter.All,
  searchTerm: "",
  status: todoStatus.Idle,
} as todoState;

export const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    addTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos.push(...action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (todo: Todo) => todo.id !== action.payload,
      );
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo: Todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },
    editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      state.todos = state.todos.map((todo: Todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text,
          };
        }
        return todo;
      });
    },
    markCompleted: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo: Todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
    markIncomplete: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo: Todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: false,
          };
        }
        return todo;
      });
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    markAllCompleted: (state) => {
      state.todos = state.todos.map((todo: Todo) => ({
        ...todo,
        completed: true,
      }));
    },
    fetchTodosSuccess: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    fetchTodosFailure: (state) => {
      state.todos = [];
      console.log("Failed to fetch todos");
    },
    updateTodoStatus: (state, action: PayloadAction<todoStatus>) => {
      state.status = action.payload;
    },
  },
});

// Export actions
export const {
  addTodo,
  addTodos,
  removeTodo,
  toggleTodo,
  editTodo,
  markCompleted,
  markIncomplete,
  setSearchTerm,
  setFilter,
  markAllCompleted,
  fetchTodosSuccess,
  fetchTodosFailure,
  updateTodoStatus,
} = todosSlice.actions;

// Export extra actions
export const fetchTodosRequest = createAction("todo/fetchTodosRequest");

export default todosSlice.reducer;
