'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const RECOMMENDED_ARTISTS = ['BTS', 'Billie Eilish', 'Drake', 'Ariana Grande', 'Ed Sheeran', 'IU', 'Post Malone', 'Adele'];

export default function ArtistSelect({ selected, onChange, onNext }: { selected: string[]; onChange: (artists: string[]) => void; onNext: () => void }) {
  const [input, setInput] = useState('');

  // 아티스트 추가
  const addArtist = (name: string) => {
    if (!name.trim() || selected.includes(name)) return;
    onChange([...selected, name]);
    setInput('');
  };

  // 아티스트 삭제
  const removeArtist = (name: string) => {
    onChange(selected.filter((a) => a !== name));
  };

  return (
    <div className='space-y-6'>
      <div>
        <div className='mb-2 flex gap-2'>
          <Input
            placeholder='아티스트 검색...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') addArtist(input);
            }}
          />
          <Button onClick={() => addArtist(input)} disabled={!input.trim()}>
            +
          </Button>
        </div>
        <div className='mb-4 flex flex-wrap gap-2'>
          {selected.map((artist) => (
            <span key={artist} className='bg-primary/10 text-primary flex items-center gap-1 rounded-full px-3 py-1 text-sm'>
              {artist}
              <button className='text-muted-foreground hover:text-destructive ml-1 text-xs' onClick={() => removeArtist(artist)} aria-label='remove'>
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-2 gap-3 md:grid-cols-5'>
        {RECOMMENDED_ARTISTS.map((artist) => (
          <button
            key={artist}
            className='bg-muted hover:bg-primary/10 hover:border-primary flex flex-col items-center rounded-lg border border-transparent p-4 transition-colors'
            onClick={() => addArtist(artist)}
            disabled={selected.includes(artist)}
          >
            <div className='bg-muted-foreground/10 mb-2 h-16 w-16 rounded' />
            <span className='text-sm'>{artist}</span>
          </button>
        ))}
      </div>
      <div className='pt-6'>
        <Button className='w-full' onClick={onNext} disabled={selected.length === 0}>
          플레이리스트 생성하기
        </Button>
      </div>
    </div>
  );
}
