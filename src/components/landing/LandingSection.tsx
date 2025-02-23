import { Button } from '@/components/ui/button';

export default function LandingSection() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <h1 className="mb-8 text-6xl font-bold md:text-8xl">
        <span className="mb-2 block text-foreground">나만의 완벽한</span>
        <span className="animate-gradient block bg-gradient-to-r from-[#E91E63] via-[#F06292] to-[#E91E63] bg-clip-text text-transparent">
          플레이리스트
        </span>
      </h1>
      <p className="mb-12 max-w-2xl text-xl text-muted-foreground">
        좋아하는 아티스트를 입력하고 플레이리스트를 만들어봐요
      </p>
      <div className="animate-slide-up flex gap-4 opacity-0">
        <Button
          size="lg"
          className="h-12 bg-gradient-to-r from-[#E91E63] to-[#F06292] px-6 text-lg hover:opacity-90"
        >
          플레이리스트 만들기
        </Button>
        <Button size="lg" variant="outline" className="h-12 px-6 text-lg">
          둘러보기
        </Button>
      </div>
    </div>
  );
}
