'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '../ui/Logo';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import { navItems } from '@/constants/navigation';

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className='p-5'>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className='px-4'>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className='h-14 text-lg' isActive={pathname === item.url}>
                <Link href={item.url} className='flex items-center gap-4 pl-2'>
                  <item.icon className='size-7' />
                  <span className='font-medium'>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
