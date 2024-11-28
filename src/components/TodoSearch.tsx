import { debounce } from "lodash";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Input } from "./ui/input";
import { setSearchTerm } from "@/redux/features/slice";

const TodoSearch = () => {
    const dispatch = useDispatch();

    const debouncedSearch = debounce((value: string) => {
        dispatch(setSearchTerm(value));
    }, 300);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        debouncedSearch(value); 
    };

    return (
        <div>
            <Input
                type="text"
                placeholder="Search your todos..."
                onChange={handleSearchChange}
                className="border rounded p-2 w-full min-w-[360px]"
            />
        </div>
    );
};

export default TodoSearch;
