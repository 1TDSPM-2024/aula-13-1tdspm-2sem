import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Criado por Rei Luizinho",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div>
        <p>PRODUTOOOOOOS</p>
        {children}
        <p>PRODUTOOOOOOS</p>
    </div>
  );
}
