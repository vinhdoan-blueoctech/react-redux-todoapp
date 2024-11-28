import { createSelector } from "reselect";
import { Todo, TodoState, Filter } from "@/types";

// Base Selectors
export const selectTodos = (state: TodoState): Todo[] => state.todos;
export const selectFilter = (state: TodoState): Filter => state.filter;
export const selectSearchTerm = (state: TodoState): string =>
    state.searchTerm.toLowerCase();
    

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