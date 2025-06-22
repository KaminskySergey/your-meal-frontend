import { cn } from "../../utils/utils";

interface IList {
    children: React.ReactNode;
    className?: string;
}

export const List = ({ children, className }: IList) => {
    return <ul className={cn(className)}>{children}</ul>;
};