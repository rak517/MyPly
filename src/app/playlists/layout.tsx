export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <aside>{/* TODO: Sidebar & MobileNav */}</aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
