import { Geist, Geist_Mono , Quicksand , Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata = {
  title: "Smart School Solution – Smart Tools for Faith-Based Education",
  description: "S3-landing-Page",
   icons: {
    icon: "/images/fav1.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${quicksand.variable} ${inter.variable} antialiased`}
      > 
        {children}
      </body>
    </html>
  );
}
