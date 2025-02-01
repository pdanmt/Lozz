import { Flex } from "@chakra-ui/react"
import type { Metadata } from "next"
import { ChakraProviders } from "./provider"
import { Toaster } from 'sonner'
import { SideBar } from "@/components/side-bar/side-bar";

export const metadata: Metadata = {
  title: "Lozz",
  description: "Player de músicas gratuito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <ChakraProviders>
          <Toaster position="top-right" />
          <SideBar />
          <Flex
            minH='100vh'
            bg='gray.900'
            color='foreground'
            gap='2rem'
          >
            {children}
          </Flex>
        </ChakraProviders>
      </body>
    </html>
  );
}
