import { Music } from 'lucide-react';

export default function AuthLogo() {
  return (
    <div className="flex cursor-pointer flex-col items-center gap-2">
      <div className="relative">
        <div className="h-24 w-24 animate-pulse rounded-full bg-gradient-to-r from-[#E91E63] to-[#F06292]" />
        <Music className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform text-white" />
      </div>
      <span className="animate-gradient bg-gradient-to-r from-[#E91E63] to-[#F06292] bg-clip-text text-4xl font-bold text-transparent">
        MyPly
      </span>
    </div>
  );
}
