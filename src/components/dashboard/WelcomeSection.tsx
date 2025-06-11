'use client';

import { Music } from 'lucide-react';
import { CreatePlaylistButton } from '@/components/ui/create-playlist-button';
import React, { useContext } from 'react';
import { UserContext } from '@/context/user-context';

export default function WelcomeSection() {
  const userContext = useContext(UserContext);
  const userName = userContext?.userName || '사용자';

  return (
    <div className='relative flex flex-col items-center justify-between overflow-hidden rounded-lg bg-purple-100 p-6 shadow-sm md:flex-row md:p-8'>
      <div className='z-10 flex flex-col items-center text-center md:items-start md:text-left'>
        <h2 className='mb-2 text-2xl font-bold text-gray-900 md:text-3xl'>안녕하세요, {userName}님!</h2>
        <p className='mb-6 text-lg text-gray-700 md:text-xl'>오늘은 어떤 음악을 발견하고 싶으신가요?</p>
        <CreatePlaylistButton showText isPrimary>
          플레이리스트 만들기
        </CreatePlaylistButton>
      </div>

      <div className='hidden items-center justify-center md:ml-auto md:flex'>
        <div className='bg-primary/30 flex h-32 w-32 items-center justify-center rounded-lg'>
          <Music className='text-primary h-16 w-16' />
        </div>
      </div>

      {/* Mobile specific icon */}
      <div className='mt-6 md:hidden'>
        <div className='bg-primary/30 flex h-24 w-24 items-center justify-center rounded-lg'>
          <Music className='text-primary h-12 w-12' />
        </div>
      </div>
    </div>
  );
}
