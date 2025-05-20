import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EduMedia",
  description: "Website edukasi multimedia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col text-gray-800`}
      >
        <header className="fixed top-0 left-0 right-0 bg-white shadow z-50 px-8 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">EduMedia</div>

          {/* Center Navigation */}
          <nav className="left-1/2 transform -translate-x-1/2 flex space-x-10 text-base font-bold">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/courses" className="hover:text-blue-600 transition">
              Courses
            </Link>
            <Link href="/quiz" className="hover:text-blue-600 transition">
              Quiz
            </Link>
          </nav>
        </header>
        <main className="p-6 pt-28 flex-1 max-w-7xl mx-auto">{children}</main>
        <footer className="text-center text-sm text-gray-500 p-4 border-t">
          © 2025 EduMedia
        </footer>
      </body>
    </html>
  );
}
