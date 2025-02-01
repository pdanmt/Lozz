import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/logo.svg'
import { Grid2x2, House, ListMusic, LogOut, Plus, UserRound } from "lucide-react"
import { FlexItems } from "./flex-items"

export function SideBarContent() {
    return (
        <>
            <Flex flexDir='column' gap='2.5rem'>
                <Text
                    fontSize='lg'
                    as={Link}
                    href='/'
                    display={['none', 'none', 'none', 'none', 'flex']}
                    gap='0.5rem'
                    alignItems='flex-end'
                    color='logo'
                    justifyContent='center'
                    fontWeight='bold'
                >
                    <Image src={logo} alt="logo image" width={28} height={28} />
                    RhythmoTune
                </Text>

                <Flex flexDir='column' gap='1rem'>

                    <FlexItems to="/">
                        <House />
                        Home
                    </FlexItems>
                    <FlexItems to="/categories">
                        <Grid2x2 />
                        Categorias
                    </FlexItems>
                    <FlexItems to="/artists">
                        <UserRound />
                        Artistas
                    </FlexItems>
                    <FlexItems to="/playlists">
                        <ListMusic />
                        Playlists
                    </FlexItems>
                    <Flex
                        alignItems='center'
                        gap='0.5rem'
                        p='1rem 0.5rem'
                        borderRadius='15px'
                        cursor='pointer'
                        color={'gray.300'}
                        _hover={{ bg: 'gray.450' }}
                    >
                        <LogOut />
                        Sair
                    </Flex>
                </Flex>
            </Flex>

            <Box
                bg="linear-gradient(45deg, #570ebb, #9260eb, #b163f3)"
                p="0.1rem"
                borderRadius="8px"
            >
                <Button
                    as={Link}
                    href='/add-music'
                    bg='gray.700'
                    color='foreground'
                    w='100%'
                    display='flex'
                    gap='0.5rem'
                    _hover={{ bg: 'linear-gradient(45deg, #570ebb, #9260eb, #b163f3)' }}
                >
                    <Plus />
                    Adicionar música
                </Button>
            </Box>
        </>
    )
}