import AppSidebar from '@/components/app-sidebar/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { cookies } from 'next/headers';
import { PropsWithChildren } from 'react';

export default async function Layout({ children }: PropsWithChildren) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className='flex min-h-screen'>
        <aside className='sticky top-0 h-screen'>
          <AppSidebar />
        </aside>

        <main className='flex-1 overflow-y-auto p-6 transition-[padding] duration-200 ease-linear group-data-[state=collapsed]/sidebar-wrapper:pl-[var(--sidebar-width-icon)]'>
          <div className='mb-4 md:hidden'>
            <SidebarTrigger />
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
