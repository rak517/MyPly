'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export function DashboardBottomSection() {
  return (
    <Card className='bg-gradient-to-r from-purple-600 to-pink-600 text-white'>
      <CardContent className='p-8 text-center'>
        <h3 className='mb-2 text-2xl font-bold'>새로운 플레이리스트 만들기</h3>
        <p className='mb-6 opacity-90'>AI가 당신만을 위한 완벽한 플레이리스트를 생성합니다</p>
        <Link href='/create'>
          <Button size='lg' variant='secondary'>
            시작하기
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
