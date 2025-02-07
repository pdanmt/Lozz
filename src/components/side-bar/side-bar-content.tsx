import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/logo.svg'
import { Grid2x2, House, ListMusic, LogOut, Plus, UserRound } from "lucide-react"
import { FlexItems } from "./flex-items"
import { SignOut } from "@/services/firebase";

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
                    <FlexItems to="/musics/categories">
                        <Grid2x2 />
                        Categorias
                    </FlexItems>
                    <FlexItems to="/musics/artists">
                        <UserRound />
                        Artistas
                    </FlexItems>
                    <FlexItems to="/musics/playlists">
                        <ListMusic />
                        Playlists
                    </FlexItems>
                    <FlexItems to='/login' color='destructive'>
                        <LogOut color='#cc0000' />
                        Sair
                    </FlexItems>
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