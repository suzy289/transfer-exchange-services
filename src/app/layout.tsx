import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'Transfer and Exchange Services | Premier Red Point UBA Cameroun',
  description: 'Services de transfert d\'argent, cartes bancaires UBA et change de devises au Cameroun. Premier Red Point UBA au Cameroun.',
  keywords: 'UBA, transfert d\'argent, cartes bancaires, change devises, Cameroun',
  authors: [{ name: 'Transfer and Exchange Services' }],
  openGraph: {
    title: 'Transfer and Exchange Services | Premier Red Point UBA Cameroun',
    description: 'Services de transfert d\'argent, cartes bancaires UBA et change de devises au Cameroun',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="transition-transform duration-300 ease-in-out">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


