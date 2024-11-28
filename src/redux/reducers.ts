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
import { Filter, Todo, TodoState } from "@/types";
import { InitialTodos, PageSizeIncrement } from "@/constants";

const initialState = {
  todos: InitialTodos as Todo[],
  filter: Filter.All,
  searchTerm: "",
  pageSize: PageSizeIncrement,
} as TodoState;

const todoReducer = (state: TodoState = initialState, action: any) => {
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
        pageSize: state.pageSize,
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
        pageSize: state.pageSize,
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
        pageSize: state.pageSize,
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo: Todo) => todo.id !== action.payload.id
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
        pageSize: state.pageSize,
      };

    case MARK_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
        pageSize: state.pageSize,
      };

    case MARK_INCOMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
        pageSize: state.pageSize,
      };

    case FILTER_TODOS:
      return {
        ...state,
        todos: state.todos,
        filter: action.payload.filter,
        searchTerm: state.searchTerm,
        pageSize: state.pageSize,
      };

    case SEARCH_TODOS:
      return {
        ...state,
        todos: state.todos,
        filter: state.filter,
        searchTerm: action.payload.searchTerm,
        pageSize: state.pageSize,
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
        pageSize: state.pageSize,
      };

    case INCREMENT_PAGE_SIZE:
      return {
        ...state,
        todos: state.todos,
        filter: state.filter,
        searchTerm: state.searchTerm,
        pageSize: state.pageSize + action.payload.pageSizeIncrement,
      };

    default:
      return state;
  }
};

export default todoReducer;
