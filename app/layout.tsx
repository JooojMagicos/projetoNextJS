import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Relogio from "@/components/relogio/Relogio";
import { CartProvider } from "@/context/CartContext";

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
        
        <header className="w-full bg-black border-b border-gray-800 py-6 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

            <div className="text-left">
              <Relogio />
            </div>

            <div className="flex flex-col items-center gap-4">
              <h1 className="text-4xl font-bold text-white">
                React & Next.js
              </h1>

              <nav className="flex gap-6 text-base">
                <Link href="/" className="hover:text-gray-300">Intro</Link>
                <Link href="/sobre" className="hover:text-gray-300">Sobre</Link>
                <Link href="/tecnologias" className="hover:text-gray-300">Tecnologias</Link>
                <Link href="/caracteristicas" className="hover:text-gray-300">Características</Link>
                <Link href="/contador" className="hover:text-gray-300">Contador</Link>
                <Link href="/Input" className="hover:text-gray-300">Input</Link>
                <Link href="/deisishop" className="hover:text-gray-300">DeisiSHOP</Link>
              </nav>
            </div>

            <div className="w-[120px]" />
          </div>
        </header>

        <main className="flex-1 flex items-start justify-center px-6 py-12">
          <div className="w-full max-w-4xl bg-gray-950 rounded-3xl shadow-2xl p-10 lg:p-14 border border-gray-800">
            
        
            <CartProvider>
              {children}
            </CartProvider>

          </div>
        </main>

        <footer className="py-8 text-center text-gray-400 bg-black border-t border-gray-800">
          <p className="text-sm font-medium">
            © 2026 DIW – Desenvolvimento de Interfaces Web
          </p>
        </footer>
      </body>
    </html>
  );
}
