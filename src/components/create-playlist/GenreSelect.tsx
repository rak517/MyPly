import { Button } from '@/components/ui/button';

const GENRES = ['팝', '락', '힙합', 'R&B', '일렉트로닉', '재즈', '클래식', '컨트리', 'K-Pop', '인디'];

export default function GenreSelect({ selected, onChange, onNext }: { selected: string[]; onChange: (genres: string[]) => void; onNext: () => void }) {
  const toggleGenre = (genre: string) => {
    if (selected.includes(genre)) {
      onChange(selected.filter((g) => g !== genre));
    } else {
      onChange([...selected, genre]);
    }
  };

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-2 gap-3 md:grid-cols-5'>
        {GENRES.map((genre) => (
          <Button key={genre} variant={selected.includes(genre) ? 'default' : 'outline'} className='w-full' onClick={() => toggleGenre(genre)}>
            {genre}
          </Button>
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
