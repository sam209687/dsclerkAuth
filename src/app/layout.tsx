import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import "./globals.css";
import NavigationPage from "@/components/(navbar)/NavigationPage";
import { dark } from "@clerk/themes";



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

export const metadata: Metadata = {
  title: "derive solars",
  description: "Created and maintained by DS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
    <html lang="en">
      <body
         
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <NavigationPage/>
        <ClerkLoading>
          <div className="flex items-center justify-center h-screen text-2xl">
              <h1>LOADING .....</h1>
          </div>
        </ClerkLoading>
       <ClerkLoaded>
         
        {children}
        </ClerkLoaded>
      </body>
    </html>
    </ClerkProvider>

  );
}
