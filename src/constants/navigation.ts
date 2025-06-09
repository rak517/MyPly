import { Home, ListMusic, Star, User, Settings, LucideIcon } from 'lucide-react';

export type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  {
    title: 'Home',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: '내 플레이리스트',
    url: '/myplaylists',
    icon: ListMusic,
  },
  {
    title: '즐겨찾기',
    url: '/favorites',
    icon: Star,
  },
  {
    title: '마이페이지',
    url: '/mypage',
    icon: User,
  },
  {
    title: '설정',
    url: '/setting',
    icon: Settings,
  },
];
