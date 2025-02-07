'use client'

import { MusicContext } from "@/context/music";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Artists() {
    const { allMusics } = MusicContext()
    const categories = allMusics.map(({ artist }) => artist)
    const arrayUniqueCategories = Array.from(new Set(categories))

    return (
        <Flex wrap='wrap' gap='2rem' m='0 auto' justify='center'>
            {arrayUniqueCategories.map((artist) => {
                const artistCover = allMusics.find((music) => music.artist === artist)
                const artistLink = artist.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "")

                if (!artistCover) {
                    return
                }

                return (
                    <Flex
                        w={['250px', '250px', '300px']}
                        h={['250px', '250px', '300px']}
                        pos='relative'
                        key={artist}
                        cursor='pointer'
                        as={Link}
                        href={`/musics/artists/${artistLink}`}
                        transition='0.2s'
                        _hover={{ filter: 'brightness(1.3)' }}
                    >
                        <Image
                            src={artistCover.cover}
                            fill
                            alt=""
                            style={{
                                borderRadius: '20px',
                                filter: 'blur(4px)',
                            }}
                        />

                        <Text
                            pos='absolute'
                            w='100%'
                            h='100%'
                            bg='#00000070'
                            borderRadius='20px'
                            textAlign='center'
                            alignContent='center'
                            fontSize='lg'
                            fontWeight='600'
                            letterSpacing='1px'
                        >
                            {artist}
                        </Text>
                    </Flex>
                )
            })}
        </Flex>
    )
}