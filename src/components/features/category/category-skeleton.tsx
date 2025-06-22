export const CategorySkeleton = () => {
    return (
      <li className="py-[3px] px-[8px] rounded-full bg-gray-200 animate-pulse flex items-center gap-2">
        <div className="w-[24px] h-[24px] rounded-full bg-gray-300" />
        <div className="w-[60px] h-[12px] bg-gray-300 rounded" />
      </li>
    );
  };