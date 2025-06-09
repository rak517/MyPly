import AppSidebar from '@/components/app-sidebar/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { cookies } from 'next/headers';
import { PropsWithChildren } from 'react';

/**
 * Renders the main layout for authenticated sections with a persistent sidebar and responsive main content area.
 *
 * Initializes the sidebar's open state based on the 'sidebar_state' cookie. The layout includes a sticky sidebar, a responsive sidebar toggle button for smaller screens, and renders the provided {@link children} within the main content area.
 *
 * @param children - The content to display within the layout's main area.
 */
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
