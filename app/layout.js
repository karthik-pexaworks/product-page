import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "FakeStore",
  description: "A modern product showcase built with Next.js + Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
        <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              🛍️ FakeStore
            </Link>
            <nav className="space-x-6 text-gray-700 font-medium">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/products" className="hover:text-blue-600 transition">Products</Link>
              <Link href="/ssr-example" className="hover:text-blue-600 transition">SSR Example</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>

        <footer className="border-t border-gray-200 mt-16 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FakeStore — Created by Karthik-Pexaworks.
        </footer>
      </body>
    </html>
  );
}
