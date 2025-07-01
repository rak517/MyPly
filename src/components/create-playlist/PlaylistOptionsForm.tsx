import { Button } from '@/components/ui/button';

const SONG_CRITERIA = [
  { key: 'popular', label: '인기곡 위주' },
  { key: 'hidden', label: '숨은 명곡 포함' },
  { key: 'latest', label: '최신곡 위주' },
];
const EXTRA_OPTIONS = [
  { key: 'allowDuplicateArtist', label: '중복 아티스트 허용 (같은 가수 여러 곡)' },
  { key: 'allowFeaturing', label: '피처링/콜라보 곡 포함' },
];

export type PlaylistOptions = {
  length: number;
  criteria: string[];
  extra: string[];
};

export default function PlaylistOptionsForm({ value, onChange, onSubmit }: { value: PlaylistOptions; onChange: (opts: PlaylistOptions) => void; onSubmit: () => void }) {
  // 핸들러
  const handleLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, length: Number(e.target.value) });
  };
  const handleCriteria = (key: string) => {
    onChange({
      ...value,
      criteria: value.criteria.includes(key) ? value.criteria.filter((c) => c !== key) : [...value.criteria, key],
    });
  };
  const handleExtra = (key: string) => {
    onChange({
      ...value,
      extra: value.extra.includes(key) ? value.extra.filter((c) => c !== key) : [...value.extra, key],
    });
  };

  return (
    <form
      className='space-y-8'
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {/* 플레이리스트 길이 */}
      <div className='rounded-xl border bg-white p-6 shadow-sm'>
        <div className='mb-2 flex items-center justify-between'>
          <label className='text-base font-semibold'>플레이리스트 길이</label>
          <span className='text-primary font-bold'>{value.length}곡</span>
        </div>
        <div className='flex items-center gap-4'>
          <span className='text-muted-foreground text-xs text-nowrap'>0곡</span>
          <input type='range' min={0} max={30} value={value.length} onChange={handleLength} className='accent-primary bg-muted h-2 w-full rounded-lg' />
          <span className='text-muted-foreground text-xs text-nowrap'>30곡</span>
        </div>
      </div>

      {/* 곡 선택 기준 */}
      <div className='rounded-xl border bg-white p-6 shadow-sm'>
        <div className='mb-4 text-base font-semibold'>곡 선택 기준</div>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
          {SONG_CRITERIA.map((item) => (
            <label
              key={item.key}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-3 transition-all select-none ${
                value.criteria.includes(item.key) ? 'bg-primary/10 border-primary text-primary font-semibold' : 'bg-muted/30 border-muted-foreground/10 hover:border-primary/40'
              } `}
            >
              <input type='checkbox' checked={value.criteria.includes(item.key)} onChange={() => handleCriteria(item.key)} className='accent-primary mr-1 scale-110' />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 추가 옵션 */}
      <div className='rounded-xl border bg-white p-6 shadow-sm'>
        <div className='mb-4 text-base font-semibold'>추가 옵션</div>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
          {EXTRA_OPTIONS.map((item) => (
            <label
              key={item.key}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-3 transition-all select-none ${
                value.extra.includes(item.key) ? 'bg-primary/10 border-primary text-primary font-semibold' : 'bg-muted/30 border-muted-foreground/10 hover:border-primary/40'
              } `}
            >
              <input type='checkbox' checked={value.extra.includes(item.key)} onChange={() => handleExtra(item.key)} className='accent-primary mr-1 scale-110' />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 하단 버튼 */}
      <Button className='mt-2 h-12 w-full text-base font-semibold' type='submit'>
        플레이리스트 생성하기
      </Button>
    </form>
  );
}
