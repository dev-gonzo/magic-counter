import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { ProviderTheme } from "./theme/providerTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magic Counter Life",
  description: "Contador de Vida Magic PT-BR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />

      <html lang="pt-BR">
        <body className={inter.className}>
          <ProviderTheme>{children}</ProviderTheme>
        </body>
      </html>
    </>
  );
}
