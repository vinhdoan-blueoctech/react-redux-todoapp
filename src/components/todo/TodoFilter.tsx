import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Filter } from "@/types";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { markAllCompleted, setFilter } from "@/redux/features/todo/slice";

const TodoFilter = () => {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState<Filter>(Filter.All);

  const handleFilterChange = (value: Filter) => {
    setSelectedFilter(value);
    dispatch(setFilter(value));
  };

  const handleMarkAll = () => {
    dispatch(markAllCompleted());
    toast.success("Yay! All tasks have been marked as completed");
  };

  return (
    <div className="flex space-x-2">
      <Select
        value={selectedFilter}
        onValueChange={(value) => handleFilterChange(value as Filter)}
      >
        <SelectTrigger className="w-[132px]">
          <SelectValue placeholder="Select a filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.values(Filter).map((filter) => (
              <SelectItem key={filter} value={filter}>
                {filter}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button onClick={handleMarkAll}>Mark All as Completed</Button>
    </div>
  );
};

export default TodoFilter;
