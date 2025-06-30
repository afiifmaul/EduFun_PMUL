import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Chatbot from "./components/Chatbot"; // Tambahkan ini

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EduFun",
  description: "Website edukasi multimedia",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col text-gray-800`}
      >
        <Header />
        <main className="p-6 pt-24 flex-1 max-w-7xl mx-auto">{children}</main>

        {/* Chatbot muncul di seluruh halaman */}
        <Chatbot />

        <footer className="bg-gray-200 text-black p-4 text-center">
          © 2025 EduFun
        </footer>
      </body>
    </html>
  );
}
