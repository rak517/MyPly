import { Music } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className='text-center'>
      <Link href='/' className='group inline-flex items-center space-x-3'>
        <div className='relative'>
          <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2d006b] via-[#6d28d9] to-[#a78bfa] shadow-2xl transition-shadow group-hover:shadow-purple-700/50'>
            <Music className='h-6 w-6 text-white' />
          </div>
          <div className='absolute -top-1 -right-1 h-4 w-4 animate-pulse rounded-full bg-pink-500 shadow-lg'></div>
        </div>
        <div>
          <span className='bg-gradient-to-r from-[#2d006b] via-[#6d28d9] to-[#a78bfa] bg-clip-text text-3xl font-bold text-transparent drop-shadow'>MyPly</span>
        </div>
      </Link>
    </div>
  );
}
