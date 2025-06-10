// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KathaKaal - Credit Inclusion Platform",
  description: "Fair credit scoring for India's underserved",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-blue-600 text-white px-4 py-4 flex justify-between items-center shadow fixed top-0 right-0 left-0 ">
          <Link href="/" className="text-2xl font-bold">
            KathaKaal
          </Link>
          <nav className="space-x-4">
            <Link href="/predict" className="hover:underline">
              Predict
            </Link>
            <Link href="/results" className="hover:underline">
              Results
            </Link>
            <Link href="/admin" className="hover:underline">
              Admin
            </Link>
          </nav>
        </header>

        <main className="p-6 max-w-full mx-auto">{children}</main>

        <footer className="bg-gray-200 text-center py-4 mt-10 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} KathaKaal. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
