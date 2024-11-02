import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"


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
  title: "Rebellion",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable, geistMono.variable,
          "antialiased h-screen flex flex-col justify-between items-center w-full font-mono relative max-w-[100vw] overflow-x-hidden"
        )}
      >
        <NextTopLoader color="#ffc876" height={4} showSpinner={false} />
        <Toaster />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="flex-1 w-full h-full flex">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
