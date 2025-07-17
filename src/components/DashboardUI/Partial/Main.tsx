import { cn } from "@/lib/utils";
import React from "react";

interface MainProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean;
  ref?: React.Ref<HTMLElement>;
}

const Main = ({ fixed, className, ...props }: MainProps) => {
  return (
    <main
      className={cn(
        "peer-[.header-fixed]/header:mt-2",
        "px-2 md:px-0 py-1",
        fixed && "fixed-main flex grow flex-col overflow-hidden",
        className
      )}
      {...props}
    />
  );
};

export default Main;
