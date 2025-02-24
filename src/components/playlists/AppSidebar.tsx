import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { navItems } from '@/data/navItems';
import Link from 'next/link';
import Logo from '../ui/Logo';
import ThemeToggle from '../ThemeToggle';

export default function AppSidebar() {
  return (
    <Sidebar className="border-r bg-card">
      <SidebarHeader className="pt-3">
        <Logo />
        <ThemeToggle />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label} className="px-4">
              <SidebarMenuButton
                asChild
                className="flex items-center rounded-md py-5 text-muted-foreground transition-all duration-200"
              >
                <Link href={item.href} className="flex gap-3">
                  <item.icon />
                  <span className="text-base font-medium">{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        {/* TODO: SidebarFooter, Dropdown 로그아웃 구현 */}
      </SidebarContent>
    </Sidebar>
  );
}
