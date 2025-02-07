'use client'

import { MusicBody, MusicContext } from "@/context/music";
import { PlayPauseMusic } from "@/utils/play-pause-music";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Artist() {
    const {
        allMusics,
        setCurrentPlaylist,
        musicInfos,
        musicAudio,
        playPauseMusic,
        setMusicAudio,
        setMusicInfos,
        filteredMusics
    } = MusicContext()
    const params: { artist: string } = useParams()

    const currentPlaylist = allMusics.filter(({ artist }) => {
        return artist.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "") === params.artist
    }).map((musics) => musics)

    useEffect(() => {
        setCurrentPlaylist(currentPlaylist)
    }, [allMusics])

    const pageTitle = allMusics.find(({ artist }) => {
        return artist.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "") === params.artist
    })


    function handlePlayPauseMusic(music: MusicBody) {
        const isThisTheMusicPlaying = musicInfos?.id === music.id ? true : false

        PlayPauseMusic({
            isThisTheMusicPlaying,
            music,
            musicAudio,
            playPauseMusic,
            setMusicAudio,
            setMusicInfos
        })
    }

    return (
        <Flex gap='2rem' align='center' direction='column'>
            <Text
                fontSize='lg'
                fontWeight='bold'
                letterSpacing='1px'
                textAlign='center'
            >
                Músicas do cantor {pageTitle?.artist}
            </Text>
            <Flex
                gap='1.5rem'
                justify='center'
                direction='column'
                w={['100%', '100%', '100%', '80%', '70%']}
            >
                {currentPlaylist.map((music) => (
                    <Flex
                        key={music.id}
                        bg='gray.500'
                        p='0.5rem'
                        borderRadius='8px'
                        gap='0.5rem'
                        cursor='pointer'
                        transition='0.2s'
                        align='center'
                        display={
                            filteredMusics.length === 0 ?
                                'flex' :
                                filteredMusics.find(({ id }) => id === music.id) ? 'flex' : 'none'
                        }
                        _hover={{ bg: 'gray.600' }}
                        onClick={() => handlePlayPauseMusic(music)}
                    >
                        <Box pos='relative' w='60px' h='60px'>
                            <Image src={music.cover} fill alt='' style={{ borderRadius: '15px' }} />
                        </Box>
                        <Box>
                            <Text
                                fontSize={['normal', 'normal', 'lg']}
                                fontWeight='600'
                                color='foreground'
                            >
                                {music.title}
                            </Text>
                            <Text fontSize='sm' color='gray.300'>
                                {music.artist}
                            </Text>
                        </Box>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}