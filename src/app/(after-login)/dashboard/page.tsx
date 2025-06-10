import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import WelcomeSection from '@/components/dashboard/WelcomeSection';

export default function Page() {
  return (
    <div className='space-y-4'>
      <DashboardHeader />
      <WelcomeSection />
    </div>
  );
}
