'use client'

import { UserContextProvider } from "@/context/user-context";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import { UserPhotoAndName } from "./user-photo-and-name"
import { SideBarContent } from "../side-bar/side-bar-content"
import { Menu } from "lucide-react"
import Image from "next/image"
import logo from '../../../public/logo.svg'

export function SmallScreenDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box display={['block', 'block', 'block', 'block', 'none']}>
            <Button
                variant='unstyled'
                display='flex'
                alignItems='center'
                onClick={onOpen}
            >
                <Menu />
            </Button>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay bg='#00000090' />
                <DrawerContent bg='gray.900' boxShadow='-5px -5px 50px #ffffff30'>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <UserContextProvider>
                            <UserPhotoAndName />
                        </UserContextProvider>
                    </DrawerHeader>
                    <DrawerBody
                        p='2rem'
                        display='flex'
                        flexDir='column'
                        justifyContent='space-between'
                        gap='3rem'
                        alignItems='left'
                    >
                       <SideBarContent />
                    </DrawerBody>
                    <DrawerFooter>
                        <Text
                            fontSize='normal'
                            display='flex'
                            gap='0.5rem'
                            alignItems='flex-start'
                            color='logo'
                            justifyContent='center'
                            fontWeight='bold'
                            m='auto'
                        >
                            <Image src={logo} alt="logo image" width={28} height={28} />
                            RhythmoTune
                        </Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}