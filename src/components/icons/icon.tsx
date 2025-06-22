import { cn } from "../../utils/utils";

type IconProps = {
    name: string;
    size?: number;
    className?: string;
};

export const Icon = ({ name, size = 24, className = '' }: IconProps) => (
    <svg
        className={cn('', className)}
        width={size}
        height={size}
        aria-hidden="true"
        focusable="false"
    >
        <use xlinkHref={`#icon-${name}`} />
    </svg>
);