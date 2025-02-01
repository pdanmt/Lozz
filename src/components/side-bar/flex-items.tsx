'use client'

import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface FlexItemsProps {
    children: ReactNode
    to: '/' | '/categories' | '/artists' | '/playlists' | '/log-out'
}

export function FlexItems({ children, to }: FlexItemsProps) {
    const pathname = usePathname()

    return (
        <Flex
            alignItems='center'
            gap='0.5rem'
            p='1rem 0.5rem'
            borderRadius='15px'
            cursor='pointer'
            color={pathname === to ? 'foreground' : 'gray.300'}
            as={Link}
            href={to}
            _hover={{ bg: 'gray.450' }}
        >
            {children}
        </Flex>
    )
}