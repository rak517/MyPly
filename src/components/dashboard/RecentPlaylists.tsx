'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function RecentPlaylists() {
  // 예시 플레이리스트 데이터
  const playlists = [
    {
      id: 1,
      title: '출근길 플레이리스트',
      songCount: 12,
      duration: '45분',
      tags: ['팝', '2010년대'],
    },
    {
      id: 2,
      title: '집중할 때 듣는 음악',
      songCount: 18,
      duration: '62분',
      tags: ['일렉트로닉', '인디'],
    },
    {
      id: 3,
      title: '운동할 때 듣는 음악',
      songCount: 15,
      duration: '53분',
      tags: ['힙합', 'EDM'],
    },
  ];

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-medium'>최근 플레이리스트</h2>
        <Button variant='link' size='sm' asChild>
          <Link href='/dashboard/playlists'>
            모두 보기 <ChevronRight className='ml-1 h-4 w-4' />
          </Link>
        </Button>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {playlists.map((playlist) => (
          <div key={playlist.id}>
            <Link href={`/dashboard/playlists/${playlist.id}`}>
              <Card className='hover:bg-muted/50 cursor-pointer transition-colors'>
                <CardContent className='p-4'>
                  <div className='flex flex-col'>
                    <div className='mb-3 h-32 w-full rounded-md bg-gradient-to-br from-purple-400 to-pink-400'></div>
                    <div className='space-y-1'>
                      <p className='font-medium'>{playlist.title}</p>
                      <p className='text-muted-foreground text-xs'>
                        {playlist.songCount}곡 • {playlist.duration}
                      </p>
                      <div className='flex gap-1'>
                        {playlist.tags.map((tag) => (
                          <Badge key={tag} variant='secondary' className='text-xs'>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
