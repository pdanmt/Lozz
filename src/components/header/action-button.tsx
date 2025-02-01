import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

export function ActionButtons({ children }: { children: ReactNode }) {
    return (
        <Button
            borderRadius='50%'
            bg='gray.500'
            _hover={{ bg: 'gray.400' }}
            h='50px'
            w='50px'
        >
            {children}
        </Button>
    )
}