'use client'

import { SignOut } from "@/services/firebase";
import { Flex, FlexProps } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface FlexItemsProps extends FlexProps {
    children: ReactNode
    to: '/' | '/musics/categories' | '/musics/artists' | '/musics/playlists' | '/login'
}

export function FlexItems({ children, to, ...props }: FlexItemsProps) {
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
            onClick={to === '/login' ? () => SignOut() : undefined}
            {...props}
        >
            {children}
        </Flex>
    )
}