'use client'

import { Flex, Text } from "@chakra-ui/react";
import { AudioMusicPlayer } from "./audio-music-player";
import { MusicContext } from "@/context/music";
import { UserContext } from "@/context/user-context";
import { MusicLoading } from "./music-loading";

export function Music() {
    const { user } = UserContext()
    const { musicLoading, allMusics, filteredMusics } = MusicContext()

    if (musicLoading || !user) {
        return <MusicLoading />
    }

    return (
        <Flex direction='column' gap='1rem'>
            <Text fontSize='xl' fontWeight='600' color='foreground'>
                {filteredMusics.length === 0 ? 'Suas músicas' : 'Músicas encontradas'}
            </Text>
            <Flex
                gap='1rem'
                overflow='auto'
                sx={{
                    '&::-webkit-scrollbar': {
                        height: '10px',
                    },
                    '&::-webkit-scrollbar-track': {
                        bg: 'transparent'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        bg: 'gray.400',
                        borderTop: '6px solid',
                        borderColor: 'gray.900',
                        cursor: 'pointer'
                    }
                }}
            >
                {allMusics.map(({
                        artist,
                        cover,
                        id,
                        index,
                        music,
                        title
                    }) => <AudioMusicPlayer
                        cover={cover}
                        id={id}
                        artist={artist}
                        music={music}
                        title={title}
                        index={index}
                        key={id}
                        isFiltered={filteredMusics.find((music) => music.id === id) ? true : false}
                    />)
                }
            </Flex>
        </Flex>
    )
}
