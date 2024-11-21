import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import NavBar from "@/components/Nav";
import { Merriweather } from "next/font/google";
import "./globals.css";

// Import Merriweather Google Font
const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  display: "swap",
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
        className={`${merriweather.variable} antialiased bg-gradient-to-br from-green-50 to-green-300 text-green-800 dark:from-[#000000] dark:to-[#0b1833c5] dark:text-green-200`}
      >
        <NavBar />
        <CustomCursor />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
