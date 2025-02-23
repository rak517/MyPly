import { ThemeProvider } from 'next-themes';
import '@/app/globals.css';

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
