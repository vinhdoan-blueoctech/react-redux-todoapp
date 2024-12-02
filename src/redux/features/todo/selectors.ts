import { createSelector } from "reselect";
import { Todo, todoState, Filter, todoStatus } from "@/types";

// Base Selectors
export const selectTodos = (state: { todo: todoState }): Todo[] => state.todo.todos;
export const selectFilter = (state: { todo: todoState }): Filter => state.todo.filter;
export const selectTodoStatus = (state: { todo: todoState }): todoStatus =>
  state.todo.status;
export const selectSearchTerm = (state: { todo: todoState }): string =>
  state.todo.searchTerm;

// Search and Filter Selector
export const selectFilteredAndSearchedTodos = createSelector(
  [selectTodos, selectFilter, selectSearchTerm],
  (todos, filter, searchTerm): Todo[] => {
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
