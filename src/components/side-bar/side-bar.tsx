import { Box } from "@chakra-ui/react";
import { SideBarContent } from "./side-bar-content";

export function SideBar() {
    return (
        <Box
            w='calc(25% - 1.5rem)'
            h='85vh'
            bg='gray.700'
            display={['none', 'none', 'none', 'none', 'flex']}
            flexDir='column'
            justifyContent='space-between'
            p='2rem'
            borderRadius='24px'
            pos='fixed'
            m='1.5rem 0 0 1.5rem'
        >
            <SideBarContent />
        </Box >
    )
}