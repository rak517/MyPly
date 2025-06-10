import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { RecentPlaylists } from '@/components/dashboard/RecentPlaylists';
import { DashboardBottomSection } from '@/components/dashboard/DashboardBottomSection';

export default function Page() {
  return (
    <div className='space-y-8'>
      <DashboardHeader />
      <WelcomeSection />
      <QuickActions />
      <RecentPlaylists />
      <DashboardBottomSection />
    </div>
  );
}
