import './ui/global.css';
import { inter } from '@/app/ui/fonts';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
        </body>

    </html>
  );
}

export default RootLayout;
