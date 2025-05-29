import '@/styles/globals.css';
import { Providers } from './providers/Providers';

export const metadata = {
  title: 'FitJournal - Track Your Fitness Journey',
  description: 'Track your fitness progress with FitJournal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

