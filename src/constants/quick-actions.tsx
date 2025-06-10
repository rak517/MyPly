import * as React from 'react';
import { Disc, Headphones, Music, Clock, LucideIcon } from 'lucide-react';

export interface QuickActionItem {
  title: string;
  icon: React.ReactElement<LucideIcon>;
  href: string;
}

export const quickActions: QuickActionItem[] = [
  {
    title: '아티스트별',
    icon: <Music className='text-primary h-5 w-5' />,
    href: '/create?type=artist',
  },
  {
    title: '장르별',
    icon: <Disc className='text-primary h-5 w-5' />,
    href: '/create?type=genre',
  },
  {
    title: '분위기별',
    icon: <Headphones className='text-primary h-5 w-5' />,
    href: '/create?type=mood',
  },
  {
    title: '시대별',
    icon: <Clock className='text-primary h-5 w-5' />,
    href: '/create?type=era',
  },
];
