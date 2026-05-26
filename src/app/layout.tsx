import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar/Navbar';
import { ScrollProgress } from '@/components/ScrollProgress/ScrollProgress';
import { I18nProvider } from '@/i18n/I18nProvider';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { THEME_STORAGE_KEY } from '@/theme/theme';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Rodrigo Dias - Desenvolvedor Full Stack',
  description: 'Portfólio de Rodrigo Dias, Desenvolvedor Full Stack. Veja meus projetos, experiência e habilidades.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeInitScript = `
    (function() {
      try {
        var storedTheme = localStorage.getItem('${THEME_STORAGE_KEY}');
        var theme = storedTheme === 'dark' || storedTheme === 'light'
          ? storedTheme
          : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
      } catch (error) {}
    })();
  `;

  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${jetBrainsMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <I18nProvider>
            <ScrollProgress />
            <Navbar />
            <main className="container">
              {children}
            </main>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
