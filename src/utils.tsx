import { Todo } from "./types";

export const handleFetchTodo = async (): Promise<Todo[]> => {
  const response = await fetch("http://localhost:5173/todo.json").then((res) =>
    res.json(),
  );

  return response;
};

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Pad with zeroes if necessary
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};
