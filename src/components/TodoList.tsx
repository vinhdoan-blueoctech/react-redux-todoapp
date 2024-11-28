import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Todo } from "@/types";
import { Card } from "./ui/card";
import { selectFilteredBySearch } from "@/redux/selectors";
import InfiniteScroll from "./ui/infiniteScrool";
import { Loader2 } from "lucide-react";
import { incrementPageSize } from "@/redux/actions";
import { PageSizeIncrement } from "@/constants";
import { useState } from "react";

const TodoList = () => {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredBySearch);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0); 

  const next = async () => {
    setLoading(true);

    setTimeout(() => {
      const startIndex = page * PageSizeIncrement;
      const nextTodos = filteredTodos.slice(
        startIndex,
        startIndex + PageSizeIncrement
      );

      if (nextTodos.length < PageSizeIncrement) {
        setHasMore(false);
      }

      setPage((prevPage) => prevPage + 1);
      dispatch(incrementPageSize(PageSizeIncrement));
      setLoading(false);
    }, 800); 
  };

  return (
    <div className="mt-4">
      <b>Tasks List</b>
      <div className="max-h-[240px] w-full overflow-y-auto mt-4 p-2">
        {filteredTodos.length === 0 ? (
          <p>No todos found.</p>
        ) : (
          <>
            <Card>
              {filteredTodos.map((todo: Todo) => (
                <TodoItem key={todo.id} {...todo} />
              ))}
            </Card>
            <InfiniteScroll
              hasMore={hasMore}
              isLoading={loading}
              next={next}
              threshold={0}
            >
              {hasMore && <Loader2 className="mt-10 mx-auto h-8 w-8 animate-spin" />}
            </InfiniteScroll>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoList;
