import { formatTime } from "@/utils";

const Clock = ({ time }: { time: number }) => {

    const formatedTime = formatTime(time);

    return (
      <div className="flex items-center justify-center">
        <div className="border-b pb-2 text-5xl font-semibold tracking-tight transition-colors">
          {formatedTime}
        </div>
      </div>
    );
  };
  
  export default Clock;
  