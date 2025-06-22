import { cn } from "../../utils/utils";

interface IContainer {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className }: IContainer) {
    return <div  className={cn(' max-w-[1440px]  ml-auto mr-auto px-[30px]', className)}>{children}</div>;
}