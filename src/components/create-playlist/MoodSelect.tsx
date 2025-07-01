import { Button } from '@/components/ui/button';

const MOODS = ['에너제틱', '차분한', '행복한', '멜랑콜리', '로맨틱', '집중'];

export default function MoodSelect({ selected, onChange, onNext }: { selected: string[]; onChange: (moods: string[]) => void; onNext: () => void }) {
  const toggleMood = (mood: string) => {
    if (selected.includes(mood)) {
      onChange(selected.filter((m) => m !== mood));
    } else {
      onChange([...selected, mood]);
    }
  };

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-2 gap-3 md:grid-cols-3'>
        {MOODS.map((mood) => (
          <Button key={mood} variant={selected.includes(mood) ? 'default' : 'outline'} className='w-full' onClick={() => toggleMood(mood)}>
            {mood}
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
