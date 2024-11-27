export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export enum Filter {
    All = "All",
    Incomplete = "Incomplete",
    Completed = "Completed",
}

export type TodoState = {
    todos: Todo[];
    filter: Filter;
    searchTerm: string;
};