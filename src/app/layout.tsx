import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onnova",
  description: "Somos tecnologia, somos força, somos evolução.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
