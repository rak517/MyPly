import AuthLogo from '@/components/auth/AuthLogo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <AuthLogo />
      {children}
    </div>
  );
}
