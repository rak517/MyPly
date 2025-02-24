import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/playlists/AppSidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <header className="flex h-16 items-center">
          <div className="px-4">
            <SidebarTrigger />
          </div>
        </header>
        <div className="px-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
