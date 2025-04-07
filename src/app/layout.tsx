import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arregaê",
  description: "Desafios pensados pra animar a galera do rolê. Aqui se separam os fortes dos que bebem. Quer moleza? Jogue Uno!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
