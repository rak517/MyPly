import { Music } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex cursor-pointer items-center gap-2">
      <div className="relative">
        <div className="h-8 w-8 animate-pulse rounded-full bg-gradient-to-r from-[#E91E63] to-[#F06292]" />
        <Music className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform text-white" />
      </div>
      <span className="animate-gradient bg-gradient-to-r from-[#E91E63] to-[#F06292] bg-clip-text text-xl font-bold text-transparent">
        MyPly
      </span>
    </div>
  );
}
