import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "React & Next.js",
  description: "Aprenda desenvolvimento web moderno com React e Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased min-h-screen bg-black flex flex-col font-sans text-white">
        {/* Header dark */}
        <header className="w-full bg-black border-b border-gray-800 py-8 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">
            <h1 className="text-4xl font-bold text-white">
              React & Next.js
            </h1>
            <nav className="flex gap-6 text-base">
              <Link
                href="/"
                className="text-white hover:text-gray-300 font-medium transition-colors"
              >
                Intro
              </Link>
              <Link
                href="/sobre"
                className="text-white hover:text-gray-300 font-medium transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="/tecnologias"
                className="text-white hover:text-gray-300 font-medium transition-colors"
              >
                Tecnologias
              </Link>
              <Link
                href="/caracteristicas"
                className="text-white hover:text-gray-300 font-medium transition-colors"
              >
                Características
              </Link>
            </nav>
          </div>
        </header>

        {/* Main com fundo escuro e card mais escuro */}
        <main className="flex-1 flex items-start justify-center px-6 py-12">
          <div className="w-full max-w-4xl bg-gray-950 rounded-3xl shadow-2xl p-10 lg:p-14 border border-gray-800">
            {children}
          </div>
        </main>

        {/* Footer dark */}
        <footer className="py-8 text-center text-gray-400 bg-black border-t border-gray-800">
          <p className="text-sm font-medium">© 2026 DIW – Desenvolvimento de Interfaces Web</p>
        </footer>
      </body>
    </html>
  );
}