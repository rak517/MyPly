'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search } from 'lucide-react';
import { navItems } from '@/constants/navigation';
import Logo from '../ui/Logo';
import { CreatePlaylistButton } from '@/components/ui/create-playlist-button';

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='flex items-center justify-between border-b p-4 md:hidden'>
        <div className='flex items-center gap-2'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon'>
                <Menu className='h-5 w-5' />
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='w-64 p-0'>
              <div className='flex h-full flex-col p-4'>
                <Logo size='md' className='!text-center' />

                <div className='mt-4 space-y-1'>
                  {navItems.map((item) => (
                    <Button key={item.url} variant={pathname === item.url ? 'secondary' : 'ghost'} className='w-full justify-start' asChild onClick={() => setOpen(false)}>
                      <Link href={item.url}>
                        <item.icon className='mr-2 h-4 w-4' />
                        {item.title}
                      </Link>
                    </Button>
                  ))}
                </div>

                <CreatePlaylistButton className='mt-auto mb-4' onClick={() => setOpen(false)} showText isPrimary>
                  새 플레이리스트
                </CreatePlaylistButton>
              </div>
            </SheetContent>
          </Sheet>

          <div className='flex items-center gap-2'>
            <Logo size='sm' className='!text-center' />
          </div>
        </div>

        <Button variant='ghost' size='icon' asChild>
          <Link href='/dashboard/search'>
            <Search className='h-5 w-5' />
          </Link>
        </Button>
      </div>

      {/* 모바일 하단 네비게이션 */}
      <div className='bg-background fixed right-0 bottom-0 left-0 z-10 flex justify-around border-t p-2 md:hidden'>
        {navItems.slice(0, 2).map((item) => (
          <Button key={item.url} variant={pathname === item.url ? 'secondary' : 'ghost'} size='icon' asChild>
            <Link href={item.url}>
              <item.icon className='h-5 w-5' />
            </Link>
          </Button>
        ))}

        <CreatePlaylistButton />

        {navItems.slice(3, 5).map((item) => (
          <Button key={item.url} variant={pathname === item.url ? 'secondary' : 'ghost'} size='icon' asChild>
            <Link href={item.url}>
              <item.icon className='h-5 w-5' />
            </Link>
          </Button>
        ))}
      </div>
    </>
  );
}
