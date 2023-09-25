import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./_providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Shop",
  description: "Test assignment app created for Web Atom",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
