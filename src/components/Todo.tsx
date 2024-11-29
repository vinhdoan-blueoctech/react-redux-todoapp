import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TodoList from "./TodoList";
import TodoAddSection from "./TodoAddSection";
import TodoFilterSearchBar from "./TodoFilterSearchBar";
import bg from "@/assets/bg.jpg";
import ImageWithHover from "./ImageWithHover";

const Todo = () => {
  return (
    <div className="flex justify-center w-full">
      <Card className="w-3/4 px-8 py-4 mt-10">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-center">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Personal Todo App
              </h1>
              <ImageWithHover src={bg} />
            </div>
          </CardTitle>
          <CardDescription>
            Your personal <b>TODO</b> is right here!!! Please don't miss
            anything.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TodoAddSection />
          <TodoFilterSearchBar />
          <TodoList />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default Todo;
