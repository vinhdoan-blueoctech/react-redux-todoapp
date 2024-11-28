import { Filter, Todo, TodoState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  todos: [] as Todo[],
  filter: Filter.All,
  searchTerm: "",
} as TodoState;

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
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (todo: Todo) => todo.id !== action.payload
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
  },
});

// Export actions
export const {
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  markCompleted,
  markIncomplete,
  setSearchTerm,
  setFilter,
  markAllCompleted,
} = todosSlice.actions;

// Define selectors within the slice
export const todosSelectors = {
  selectTodos: (state: { todo: TodoState }) => state.todo.todos,
  selectFilter: (state: { todo: TodoState }) => state.todo.filter,
  selectSearchTerm: (state: { todo: TodoState }) => state.todo.searchTerm,
  selectFilteredTodos: (state: { todo: TodoState }) => {
    const todos = state.todo.todos;
    const filter = state.todo.filter;

    return todos.filter((todo: Todo) => {
      if (filter === Filter.All) return true;
      if (filter === Filter.Completed) return todo.completed;
      if (filter === Filter.Incomplete) return !todo.completed;
      return false;
    });
  },
  selectFilteredAndSearchedTodos: (state: { todo: TodoState }) => {
    const filteredTodos = todosSelectors.selectFilteredTodos(state);
    const searchTerm = state.todo.searchTerm.toLowerCase();

    return filteredTodos.filter((todo: Todo) =>
      todo.text.toLowerCase().includes(searchTerm)
    );
  },
};

export default todosSlice.reducer;
