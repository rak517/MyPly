import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Play, Trash, RefreshCw, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_TRACKS = [
  { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20' },
  { id: 2, title: "Don't Start Now", artist: 'Dua Lipa', duration: '3:03' },
  { id: 3, title: 'Watermelon Sugar', artist: 'Harry Styles', duration: '2:54' },
  { id: 4, title: 'Dynamite', artist: 'BTS', duration: '3:19' },
  { id: 5, title: 'Levitating', artist: 'Dua Lipa', duration: '3:23' },
  { id: 6, title: 'Save Your Tears', artist: 'The Weeknd', duration: '3:35' },
];

function formatTotalDuration() {
  const totalSec = MOCK_TRACKS.reduce((sum, t) => {
    const [min, sec] = t.duration.split(':').map(Number);
    return sum + min * 60 + sec;
  }, 0);
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;
  return `${min}분${sec > 0 ? ' ' + sec + '초' : ''}`;
}

export default function PlaylistResult({ onRegenerate, onSave }: { onRegenerate: () => void; onSave?: () => void }) {
  const [playlistName, setPlaylistName] = useState('나만의 플레이리스트');
  const [tracks, setTracks] = useState(MOCK_TRACKS);

  // 곡 삭제
  const removeTrack = (id: number) => {
    setTracks(tracks.filter((t) => t.id !== id));
  };

  return (
    <div className='space-y-6'>
      {/* 상단 타이틀/곡수 및 버튼 */}
      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-xl font-bold'>생성된 플레이리스트</h2>
            <p className='text-muted-foreground text-sm'>
              {tracks.length}곡 • {formatTotalDuration()}
            </p>
          </div>
          <div className='flex gap-2'>
            <Button variant='outline' size='sm' onClick={onRegenerate}>
              <RefreshCw className='mr-2 h-4 w-4' />
              다시 생성
            </Button>
            <Button size='sm'>
              <Play className='mr-2 h-4 w-4' />
              재생
            </Button>
          </div>
        </div>
      </div>

      {/* 이름 입력 */}
      <div className='space-y-2'>
        <Label htmlFor='playlist-name'>플레이리스트 이름</Label>
        <Input id='playlist-name' value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} />
      </div>

      {/* 곡 리스트 */}
      <div className='rounded-md border'>
        <div className='bg-muted/50 flex items-center justify-between p-3'>
          <div className='flex items-center gap-2'>
            <Button variant='ghost' size='icon' className='h-8 w-8'>
              <Play className='h-4 w-4' />
            </Button>
            <span className='font-medium'>전체 곡</span>
          </div>
          <span className='text-muted-foreground text-sm'>드래그하여 순서 변경</span>
        </div>

        <div className='max-h-[400px] divide-y overflow-y-auto'>
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
              className='hover:bg-muted/50 flex items-center p-3'
            >
              <div className='text-muted-foreground w-8 text-center'>{index + 1}</div>
              <div className='bg-muted mx-3 flex h-10 w-10 items-center justify-center rounded-md'>
                <Music className='text-muted-foreground h-5 w-5' />
              </div>
              <div className='flex-1'>
                <p className='font-medium'>{track.title}</p>
                <p className='text-muted-foreground text-xs'>{track.artist}</p>
              </div>
              <div className='text-muted-foreground text-sm'>{track.duration}</div>
              <Button variant='ghost' size='icon' className='ml-2' onClick={() => removeTrack(track.id)}>
                <Trash className='h-4 w-4' />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className='flex justify-end'>
        <Button onClick={onSave}>플레이리스트 저장</Button>
      </div>
    </div>
  );
}
