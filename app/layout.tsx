import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import ParticleBg from '@/components/ParticleBg';
import ScrollProgress from '@/components/ScrollProgress';
import CustomCursor from '@/components/CustomCursor';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Divya Lanka | Modern AI Software Engineer Portfolio',
  description:
    'Portfolio of Divya Lanka - Computer Science Graduate, Python & SQL Developer, Data Analyst, Full Stack Developer, and AI Enthusiast.',
  keywords: [
    'Divya Lanka',
    'Divya Lanka Portfolio',
    'Computer Science Graduate',
    'Python Developer',
    'SQL Developer',
    'Data Analyst',
    'Power BI',
    'PostgreSQL',
    'Full Stack Developer',
    'AI Enthusiast',
  ],
  authors: [{ name: 'Divya Lanka' }],
  openGraph: {
    title: 'Divya Lanka | Software & AI Engineer Portfolio',
    description:
      'Computer Science Graduate skilled in Python, SQL, PostgreSQL, Power BI, and Full Stack Web Development.',
    type: 'website',
    url: 'https://divyalanka.vercel.app',
    siteName: 'Divya Lanka Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divya Lanka | Portfolio',
    description: 'Python Developer, SQL Developer, Data Analyst & AI Enthusiast',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${firaCode.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-white min-h-screen flex flex-col relative">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LoadingScreen />
          <ScrollProgress />
          <CustomCursor />
          <ParticleBg />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
