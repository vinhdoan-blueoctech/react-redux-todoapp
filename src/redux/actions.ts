import { Filter } from "@/types";
import { PageSizeIncrement } from "@/constants";
import {
    ADD_TODO,
    EDIT_TODO,
    FILTER_TODOS,
    INCREMENT_PAGE_SIZE,
    MARK_ALL_COMPLETED,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    REMOVE_TODO,
    SEARCH_TODOS,
    TOGGLE_TODO,
} from "./actionTypes";

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: { text },
});

export const editTodo = (id: number, text: string) => ({
    type: EDIT_TODO,
    payload: { id, text },
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: { id },
});

export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: { id },
});

export const markCompleted = (id: number) => ({
    type: MARK_COMPLETED,
    payload: { id },
});

export const markIncomplete = (id: number) => ({
    type: MARK_INCOMPLETE,
    payload: { id },
});

export const filterTodos = (filter: Filter) => ({
    type: FILTER_TODOS,
    payload: { filter },
});

export const searchTodos = (searchTerm: string) => ({
    type: SEARCH_TODOS,
    payload: { searchTerm },
});

export const markAllCompleted = () => ({
    type: MARK_ALL_COMPLETED,
});

export const incrementPageSize = (pageSizeIncrement: number = PageSizeIncrement) => ({
    type: INCREMENT_PAGE_SIZE,
    payload: { pageSizeIncrement },
});
