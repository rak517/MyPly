'use client';

import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { quickActions } from '@/constants/quick-actions';

export function QuickActions({ gridClassName = 'grid grid-cols-2 gap-4 md:grid-cols-4' }: { gridClassName?: string }) {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold'>빠른 플레이리스트 생성</h2>

      <div className={gridClassName}>
        {quickActions.map((action) => (
          <div key={action.title}>
            <Link href={action.href}>
              <Card className='hover:bg-muted/50 cursor-pointer transition-colors'>
                <CardContent className='flex flex-col items-center justify-center p-4 text-center'>
                  <div className='bg-primary/10 mb-2 flex h-10 w-10 items-center justify-center rounded-full'>{action.icon}</div>
                  <p className='text-sm font-medium'>{action.title}</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
