import { createSelector } from "reselect";
import { Todo, TodoState, Filter } from "@/types";

// Base Selectors
export const selectTodos = (state: TodoState): Todo[] => state.todos;
export const selectFilter = (state: TodoState): Filter => state.filter;
export const selectPageSize = (state: TodoState): number => state.pageSize;
export const selectSearchTerm = (state: TodoState): string =>
    state.searchTerm.toLowerCase();

// PageSize Selector
export const selectTodosWithPageSize = createSelector(
    [selectTodos, selectPageSize],
    (todos: Todo[], pageSize: number) => {
        return todos.slice(0, pageSize);
    }
)

// Filter Selector
export const selectFilteredByStatus = createSelector(
    [selectTodosWithPageSize, selectFilter],
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
