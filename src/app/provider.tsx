'use client'

import { darkTheme } from "@/styles/darkTheme";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

export function ChakraProviders({ children }: { children: ReactNode }) {
    return <ChakraProvider theme={darkTheme}>{children}</ChakraProvider>
}