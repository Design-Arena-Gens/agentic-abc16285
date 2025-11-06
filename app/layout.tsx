import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Best 5 Lemon Pie Recipes',
  description: 'Curated top five lemon pie recipes with clear steps.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <h1>Best 5 Lemon Pie Recipes</h1>
            <p className="tagline">Bright, balanced, and tested to perfection.</p>
          </div>
        </header>
        <main className="container content">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>
              Crafted with ?? ? no ads, just great pies.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
