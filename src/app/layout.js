import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // <-- baru

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EduFun",
  description: "Website edukasi multimedia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col text-gray-800`}
      >
        <Header /> {/* <-- render client header */}
        {/* tambah pt-24 agar konten tidak tertutup header */}
        <main className="p-6 pt-24 flex-1 max-w-7xl mx-auto">{children}</main>
        <footer className="text-center text-sm text-gray-500 p-4 border-t">
          © 2025 EduFun
        </footer>
      </body>
    </html>
  );
}
