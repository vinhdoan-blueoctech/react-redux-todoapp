import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const TimesUpDialog = ({ onClose }: { onClose: () => void }) => {
  return (
    <Alert
      variant="destructive"
      className="flex flex-col items-start space-y-4 hover:bg-slate-50 hover:cursor-pointer mt-2"
      onClick={onClose}
    >
      <div className="flex items-center space-x-2">
        <AlertCircle className="h-4 w-4 text-red-500" />
        <div>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>You’re running out of time.</AlertDescription>
        </div>
      </div>
    </Alert>
  );
};

export default TimesUpDialog;
