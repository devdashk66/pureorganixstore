import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import NavBar from "@/components/Nav";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Merriweather } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { CartProvider } from "./context/CartContext";
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
    <html lang="en">
      <body
        className={`${merriweather.className} antialiased bg-gradient-to-br from-white to-purple-200 text-green-800 dark:from-[#000000] dark:to-[#0b1833c5] dark:text-green-200`}
      >
        <NextTopLoader
          color="#22c55e"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          showSpinner={false}
        />
        <FloatingNav />
        <CustomCursor />
        <CartProvider>
          <NavBar />
          <main>{children}</main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
