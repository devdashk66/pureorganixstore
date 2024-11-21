import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pure Organix | Organic Products Store",
  description:
    "Shop premium organic products at Pure Organix. Natural, sustainable, and healthy choices for conscious living.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-white to-green-300 text-green-800 dark:from-[#000000] dark:to-[#0b1833c5] dark:text-green-200`}
      >
        {children}
      </body>
    </html>
  );
}
