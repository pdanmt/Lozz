import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function CategoryLayout({ children }: { children: ReactNode }) {
    return (
        <Flex
            direction='column'
            m='0 0 11.5vh auto'
            w={['100%', '100%', '100%', '100%', '75%']}
            p={['0 0.5rem', '0 0.5rem', '0 0.5rem', '0 0.5rem', '0 2rem']}
        >
            <Header />
            {children}
            <Footer />
        </Flex>
    )
}