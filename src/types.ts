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

export enum todoStatus {
  Idle = "idle",
  Running = "running",
}

export enum timerStatus {
  Idle = "idle",
  Running = "running",
  TimesUp = "timesup",
}

export type todoState = {
  todos: Todo[];
  filter: Filter;
  searchTerm: string;
  status: todoStatus;
};

export type TimerState = {
  time: number;
  status: timerStatus;
  isActive: boolean;
};
