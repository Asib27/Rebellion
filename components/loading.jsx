import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

export const Loading = ({ className = "", size = 24 }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full h-full",
        className
      )}
    >
      <LoaderCircle className="animate-spin" size={size} />
    </div>
  );
};
