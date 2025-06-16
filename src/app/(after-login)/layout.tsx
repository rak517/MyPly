import AppSidebar from '@/components/app-sidebar/AppSidebar';
import { MobileNav } from '@/components/dashboard/MobileNav';
import { SidebarProvider } from '@/components/ui/sidebar';
import { PropsWithChildren } from 'react';
import { createClient } from '@/utils/supabase/server';
import { UserProvider } from '@/context/user-context';

export default async function Layout({ children }: PropsWithChildren) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userName = user?.user_metadata?.nickname || user?.email?.split('@')[0] || '사용자';

  return (
    <SidebarProvider defaultOpen={true}>
      <UserProvider userName={userName}>
        <div className='flex min-h-screen w-full'>
          <aside className='sticky top-0 h-screen'>
            <AppSidebar />
          </aside>

          <main className='w-full flex-1 overflow-y-auto transition-[padding] duration-200 ease-linear group-data-[state=collapsed]/sidebar-wrapper:pl-[var(--sidebar-width-icon)] md:p-6'>
            <MobileNav />
            {children}
          </main>
        </div>
      </UserProvider>
    </SidebarProvider>
  );
}
