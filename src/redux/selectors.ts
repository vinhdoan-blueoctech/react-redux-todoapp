import { createSelector } from "reselect";
import { Todo, TodoState, Filter } from "@/types";

// Base Selectors
export const selectTodos = (state: { todo: TodoState }) => state.todo.todos;
export const selectFilter = (state: { todo: TodoState }) => state.todo.filter;
export const selectSearchTerm = (state: { todo: TodoState }) =>
  state.todo.searchTerm;

// Filter Selector
export const selectFilteredByStatus = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    return todos.filter((todo: Todo) => {
      if (filter === Filter.Completed) return todo.completed;
      if (filter === Filter.Incomplete) return !todo.completed;
      return true;
    });
  }
);

// Filter and Search Selector
export const selectFilteredBySearch = createSelector(
  [selectFilteredByStatus, selectSearchTerm],
  (filteredTodos: Todo[], searchTerm: string) => {
    return filteredTodos.filter((todo: Todo) =>
      todo.text.toLowerCase().includes(searchTerm)
    );
  }
);
