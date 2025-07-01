'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { useState, useEffect } from 'react';
import ArtistSelect from '@/components/create-playlist/ArtistSelect';
import GenreSelect from '@/components/create-playlist/GenreSelect';
import MoodSelect from '@/components/create-playlist/MoodSelect';
import EraSelect from '@/components/create-playlist/EraSelect';
import PlaylistOptionsForm, { PlaylistOptions } from '@/components/create-playlist/PlaylistOptionsForm';
import PlaylistResult from '@/components/create-playlist/PlaylistResult';

export default function CreatePlaylistPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.get('type');
  const step = searchParams.get('step') || '1';

  // step=1일 때 자동으로 step=2로 이동
  useEffect(() => {
    if (type && step === '1') {
      router.replace(`/create?type=${type}&step=2`);
    }
  }, [type, step, router]);

  // 각 방식별 선택 상태
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
  const [selectedEras, setSelectedEras] = useState<string[]>([]);

  // 3단계 옵션 상태
  const [playlistOptions, setPlaylistOptions] = useState<PlaylistOptions>({
    length: 15,
    criteria: [],
    extra: [],
  });

  // 진행률 계산 (1~3단계, 4단계는 완성)
  let currentStep = 1;
  if (type) currentStep = step === '2' ? 2 : step === '3' ? 3 : step === '4' ? 3 : 2;

  // 단계별 렌더링
  let content = null;
  if (!type) {
    // 1단계: 생성 방식 선택
    content = (
      <div className='mx-auto max-w-2xl py-8'>
        <h1 className='mb-4 text-2xl font-bold'>플레이리스트 만들기</h1>
        <QuickActions gridClassName='grid grid-cols-2 gap-4' />
      </div>
    );
  } else if (type === 'artist' && step === '2') {
    // 2단계: 아티스트 선택
    content = (
      <div className='mx-auto max-w-2xl py-8'>
        <h1 className='mb-4 text-2xl font-bold'>플레이리스트 맞춤 설정</h1>
        <p className='text-muted-foreground mb-6'>원하는 음악 특성을 선택해주세요</p>
        <ArtistSelect selected={selectedArtists} onChange={setSelectedArtists} onNext={() => router.push('/create?type=artist&step=3')} />
      </div>
    );
  } else if (type === 'genre' && step === '2') {
    // 2단계: 장르 선택
    content = (
      <div className='mx-auto max-w-2xl py-8'>
        <h1 className='mb-4 text-2xl font-bold'>플레이리스트 맞춤 설정</h1>
        <p className='text-muted-foreground mb-6'>원하는 음악 특성을 선택해주세요</p>
        <GenreSelect selected={selectedGenres} onChange={setSelectedGenres} onNext={() => router.push('/create?type=genre&step=3')} />
      </div>
    );
  } else if (type === 'mood' && step === '2') {
    // 2단계: 분위기 선택
    content = (
      <div className='mx-auto max-w-2xl py-8'>
        <h1 className='mb-4 text-2xl font-bold'>플레이리스트 맞춤 설정</h1>
        <p className='text-muted-foreground mb-6'>원하는 음악 특성을 선택해주세요</p>
        <MoodSelect selected={selectedMoods} onChange={setSelectedMoods} onNext={() => router.push('/create?type=mood&step=3')} />
      </div>
    );
  } else if (type === 'era' && step === '2') {
    // 2단계: 시대 선택
    content = (
      <div className='mx-auto max-w-2xl py-8'>
        <h1 className='mb-4 text-2xl font-bold'>플레이리스트 맞춤 설정</h1>
        <p className='text-muted-foreground mb-6'>원하는 음악 특성을 선택해주세요</p>
        <EraSelect selected={selectedEras} onChange={setSelectedEras} onNext={() => router.push('/create?type=era&step=3')} />
      </div>
    );
  } else if (step === '3') {
    // 3단계: 상세 옵션 입력
    content = (
      <div className='mx-auto max-w-2xl py-8'>
        <h1 className='mb-4 text-2xl font-bold'>플레이리스트 상세 옵션</h1>
        <PlaylistOptionsForm
          value={playlistOptions}
          onChange={setPlaylistOptions}
          onSubmit={() => {
            router.push(`/create?type=${type}&step=4`);
          }}
        />
      </div>
    );
  } else if (step === '4') {
    // 4단계: 완성 페이지
    content = (
      <div className='mx-auto max-w-2xl py-8'>
        <h1 className='mb-4 text-2xl font-bold'>생성된 플레이리스트</h1>
        <PlaylistResult onRegenerate={() => router.push(`/create?type=${type}&step=2`)} />
      </div>
    );
  } else {
    // 2단계 이상: 추후 구현
    content = (
      <div className='mx-auto max-w-2xl py-8'>
        <h1 className='mb-4 text-2xl font-bold'>2단계 UI 자리</h1>
        <p>
          type: {type}, step: {step}
        </p>
      </div>
    );
  }

  return (
    <div className='p-4'>
      {/* 진행률 바 */}
      <div className='mx-auto my-6 flex max-w-2xl items-center justify-center gap-2'>
        {[1, 2, 3].map((stepNum) => (
          <div key={stepNum} className={`h-1.5 flex-1 rounded-full transition-all ${currentStep >= stepNum ? 'bg-primary' : 'bg-muted/30'} `} />
        ))}
      </div>
      {content}
    </div>
  );
}
