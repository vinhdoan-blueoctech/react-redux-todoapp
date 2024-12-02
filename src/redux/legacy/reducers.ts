import {
    ADD_TODO,
    EDIT_TODO,
    FILTER_TODOS,
    MARK_ALL_COMPLETED,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    REMOVE_TODO,
    SEARCH_TODOS,
    TOGGLE_TODO,
} from "./actionTypes";
import { Filter, Todo, todoState } from "@/types";

const initialState = {
    todos: [] as Todo[],
    filter: Filter.All,
    searchTerm: "",
} as todoState;

const todoReducer = (state: todoState = initialState, action: any) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.payload.text,
                        completed: false,
                    } as Todo,
                ],
                filter: state.filter,
                searchTerm: state.searchTerm,
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo: Todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, text: action.payload.text }
                        : todo
                ),
                filter: state.filter,
                searchTerm: state.searchTerm,
            }
        case TOGGLE_TODO:
            return {
                todos: state.todos.map((todo: Todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(
                    (todo: Todo) => todo.id !== action.payload.id
                ),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };

        case MARK_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo: Todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, completed: true }
                        : todo
                ),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };

        case MARK_INCOMPLETE:
            return {
                ...state,
                todos: state.todos.map((todo: Todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, completed: false }
                        : todo
                ),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };

        case FILTER_TODOS:
            return {
                ...state,
                todos: state.todos,
                filter: action.payload.filter,
                searchTerm: state.searchTerm,
            };

        case SEARCH_TODOS:
            return {
                ...state,
                todos: state.todos,
                filter: state.filter,
                searchTerm: action.payload.searchTerm,
            };

        case MARK_ALL_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo: Todo) => ({
                    ...todo,
                    completed: true,
                })),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };

        default:
            return state;
    }
};

export default todoReducer;
