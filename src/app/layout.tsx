import "./globals.css";
import { Montserrat } from "next/font/google";

const roboto = Montserrat({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta></meta>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
