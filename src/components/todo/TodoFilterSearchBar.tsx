import TodoFilter from "./TodoFilter";
import TodoSearch from "./TodoSearch";

const TodoFilterSearchBar = () => {
  return (
    <div className="mt-4">
      <b>Filters</b>
      <div className="flex justify-between mt-2">
        <TodoFilter />
        <TodoSearch />
      </div>
    </div>
  );
};

export default TodoFilterSearchBar;
