import AppSidebar from '@/components/app-sidebar/AppSidebar';
import { MobileNav } from '@/components/dashboard/MobileNav';
import { SidebarProvider } from '@/components/ui/sidebar';
import { cookies } from 'next/headers';
import { PropsWithChildren } from 'react';

export default async function Layout({ children }: PropsWithChildren) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className='flex min-h-screen w-full'>
        <aside className='sticky top-0 h-screen'>
          <AppSidebar />
        </aside>

        <main className='w-full flex-1 overflow-y-auto transition-[padding] duration-200 ease-linear group-data-[state=collapsed]/sidebar-wrapper:pl-[var(--sidebar-width-icon)] md:p-6'>
          <MobileNav />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
