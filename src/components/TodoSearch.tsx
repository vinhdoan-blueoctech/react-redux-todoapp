import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTodos } from "@/redux/actions";

const TodoSearch = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearchClick = () => {
        dispatch(searchTodos(searchTerm));
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="flex space-x-2">
            <Input
                id="filterTodoInput"
                placeholder="Filter your tasks"
                className="min-w-[300px]"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <Button onClick={handleSearchClick}>
                <Search />
            </Button>
        </div>
    );
};

export default TodoSearch;
