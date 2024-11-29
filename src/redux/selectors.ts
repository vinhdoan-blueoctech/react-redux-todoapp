import { createSelector } from "reselect";
import { Todo, TodoState, Filter } from "@/types";

// Base Selectors
export const selectTodos = (state: { todo: TodoState }) => state.todo.todos;
export const selectFilter = (state: { todo: TodoState }) => state.todo.filter;
export const selectSearchTerm = (state: { todo: TodoState }) =>
  state.todo.searchTerm;

// Search and Filter Selector
export const selectFilteredAndSearchedTodos = createSelector(
  [selectTodos, selectFilter, selectSearchTerm],
  (todos, filter, searchTerm) => {
    return todos
      .filter((todo: Todo) => {
        if (filter === Filter.Completed) return todo.completed;
        if (filter === Filter.Incomplete) return !todo.completed;
        return true; 
      })
      .filter((todo: Todo) =>
        todo.text.toLowerCase().includes(searchTerm)
      );
  }
);
