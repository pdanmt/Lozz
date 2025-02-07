import { Flex } from "@chakra-ui/react"
import type { Metadata } from "next"
import { ChakraProviders } from "./provider"
import { Toaster } from 'sonner'
import { SideBar } from "@/components/side-bar/side-bar";
import { MusicContextProvider } from "@/context/music";
import { UserContextProvider } from "@/context/user-context";

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
        <UserContextProvider>
          <MusicContextProvider>
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
        </MusicContextProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
