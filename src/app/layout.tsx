import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google';
import "./globals.scss";

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Sodiq Lendsqr",
  description: "Lendsqr Frontend Engineering Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.variable}>
        {children}
      </body>
    </html>
  );
}