'use client';

import { useRouter } from 'next/navigation';
import { Button } from './button';
import Logo from './Logo';

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => '/login'}
              className="text-foreground/60 hover:text-foreground"
            >
              로그인
            </Button>
            <Button
              onClick={() => router.push('/signup')}
              className="bg-gradient-to-r from-[#E91E63] to-[#F06292] hover:opacity-90"
            >
              시작하기
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
