import '@/app/globals.css';
import ThemeProvider from '@/provider/ThemeProvider';

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
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
