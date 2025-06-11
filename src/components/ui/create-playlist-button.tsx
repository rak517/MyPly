'use client';

import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import * as React from 'react';

interface CreatePlaylistButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  className?: string;
  onClick?: () => void;
  showText?: boolean;
  isPrimary?: boolean;
}

export function CreatePlaylistButton({ className, onClick, showText = false, isPrimary = false, children, ...props }: CreatePlaylistButtonProps) {
  const buttonSize = isPrimary ? 'lg' : showText ? 'default' : 'icon';
  const buttonVariant = isPrimary ? 'default' : 'ghost';

  return (
    <Button
      variant={buttonVariant}
      size={buttonSize}
      className={cn(
        isPrimary ? 'bg-purple-600 px-5 py-2.5 text-white transition-colors hover:bg-purple-700 active:bg-purple-800' : 'bg-primary/10 text-primary',
        showText && !isPrimary && 'w-full justify-start',
        className,
      )}
      asChild
      onClick={onClick}
      {...props}
    >
      <Link href='/create'>
        <Plus className={cn('h-5 w-5', (showText || isPrimary) && 'mr-2')} />
        {(showText || isPrimary) && (children || '새 플레이리스트')}
      </Link>
    </Button>
  );
}
