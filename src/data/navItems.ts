import { Home, Library, PlusCircle, User } from 'lucide-react';

export const navItems = [
  {
    icon: Home,
    label: '홈',
    href: '/',
  },
  {
    icon: Library,
    label: '내 플레이리스트',
    href: '/playlists',
  },
  {
    icon: PlusCircle,
    label: '새 플레이리스트',
    href: '/playlists/new',
  },
  {
    icon: User,
    label: '로그인',
    href: '/login',
  },
];
