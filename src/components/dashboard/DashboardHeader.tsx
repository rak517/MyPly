'use client';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell } from 'lucide-react';
import Link from 'next/link';

export function DashboardHeader() {
  return (
    <div className='hidden items-center justify-between md:flex'>
      <h1 className='text-2xl font-bold'>Home</h1>
      <div className='flex items-center gap-2'>
        <Button variant='ghost' size='icon'>
          <Bell className='h-5 w-5' />
        </Button>
        <Link href='/dashboard/profile'>
          <Avatar className='cursor-pointer'>
            <AvatarImage src='/placeholder.svg?height=32&width=32' alt='사용자' />
            <AvatarFallback />
          </Avatar>
        </Link>
      </div>
    </div>
  );
}
