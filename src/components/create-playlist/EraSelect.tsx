import { Button } from '@/components/ui/button';

const ERAS = ['1990', '2000', '2010', '2020'];

export default function EraSelect({ selected, onChange, onNext }: { selected: string[]; onChange: (eras: string[]) => void; onNext: () => void }) {
  const toggleEra = (era: string) => {
    if (selected.includes(era)) {
      onChange(selected.filter((e) => e !== era));
    } else {
      onChange([...selected, era]);
    }
  };

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-2 gap-3 md:grid-cols-4'>
        {ERAS.map((era) => (
          <Button key={era} variant={selected.includes(era) ? 'default' : 'outline'} className='w-full' onClick={() => toggleEra(era)}>
            {era}년대
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
