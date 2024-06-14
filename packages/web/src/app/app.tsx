"use client";

import Header from "@/components/header";
import StyledComponentsRegistry from "@/lib/StyledComponetsRegistry";
import { GlobalStyle } from "@/styles/GlobalStyles";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <html lang="pt-BR">
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
