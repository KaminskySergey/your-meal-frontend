import { cn } from "../../utils/utils";

interface IButton {
    children: React.ReactNode;
    submit?: boolean;
    className?: string;
    orange?: boolean
    green?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ onClick, children, submit = false, className = "", orange = false }: IButton) => {
    return (
        <button
            onClick={onClick}
            type={submit ? "submit" : "button"}
            className={cn(
                "h-[30px] md:h-[40px] transition-colors duration-300 ease-in-out outline-none w-full p-[9px] md:p-[12px] flex justify-center items-center rounded-[8px] text-[12px] md:text-[16px] font-normal",
                {
                    "bg-orangeRed hover:bg-[#D59313] text-white": orange,
                    "bg-green hover:bg-[#1EA51E] text-black": !orange,
                },
                className
            )}
        >
            {children}
        </button>
    );
};