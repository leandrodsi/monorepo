import { cn } from '@repo/utils';
import { Search } from 'lucide-react';
import { HTMLAttributes } from 'react';

type InputSearchProps = HTMLAttributes<HTMLDivElement>;

export const InputSearch = ({ className, ...props }: InputSearchProps) => {
  return (
    <div className={cn('flex items-center relative', className)} {...props}>
      <Search size={20} className="text-rangoonGreen-600 absolute left-3" />
      <input
        type="search"
        name="search"
        id="search"
        className="flex items-center gap-3 w-[420px] h-12 pl-10 pr-3 rounded-lg bg-[#E8E8EB]"
        placeholder="I'm searching for..."
      />
    </div>
  );
};
