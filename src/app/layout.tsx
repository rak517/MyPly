import '@/styles/globals.css';

export const metadata = {
  title: 'MyPly',
  description: 'MyPly',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
