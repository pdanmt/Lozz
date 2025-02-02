'use client'

import { MusicContext } from "@/context/music"
import { Box, Flex, Skeleton, Text } from "@chakra-ui/react"
import { Vibrant } from "node-vibrant/browser"
import { useEffect, useState } from "react"
import Image from "next/image"

interface AudioMusicPlayerProps {
    title: string
    cover: string
    music: string
    artist: string
    id: string
    index: number
    isFiltered?: boolean
}

export function AudioMusicPlayer({
    artist,
    cover,
    id,
    music,
    title,
    index,
    isFiltered
}: AudioMusicPlayerProps) {
    const {
        setMusicAudio,
        musicAudio,
        playPauseMusic,
        setMusicInfos,
        musicInfos,
        filteredMusics
    } = MusicContext()
    const [coverColors, setCoverColors] = useState<string[]>()

    useEffect(() => {
        async function GetColors() {
            try {
                const pallete = await Vibrant.from(cover).getPalette()
                const colors = [pallete.DarkVibrant, pallete.Vibrant, pallete.LightMuted]

                const coverColors = colors.map((color) => {
                    const rgb0 = color?.rgb[0] || ''
                    const rgb1 = color?.rgb[1] || ''
                    const rgb2 = color?.rgb[2] || ''

                    return `rgb(${rgb0} ${rgb1} ${rgb2})`
                })

                setCoverColors(coverColors)
            } catch (error) {
                console.error('Error extracting colors:', error);
                return []
            }
        }

        GetColors()
    }, [])

    const isThisTheMusicPlaying = musicInfos?.id === id ? true : false

    function handlePlayPauseMusic() {
        if (!musicAudio) {
            const audio = new Audio(music)
            setMusicAudio(audio)
            setMusicInfos({ title, music, cover, id, artist, index })
            return
        }

        if (musicAudio && !isThisTheMusicPlaying) {
            musicAudio.pause()

            const audio = new Audio(music)
            setMusicAudio(audio)

            setMusicInfos({ title, cover, music, id, artist, index })
            return
        }

        if (musicAudio && isThisTheMusicPlaying) {
            playPauseMusic()
            return
        }
    }

    if (!coverColors) {
        return <Skeleton
            minW='165px'
            minH='210px'
            borderRadius='25px'
            startColor='gray.500'
            endColor='gray.450'
            opacity={1}
        />
    }

    return (
        <Flex
            display={filteredMusics.length === 0 ? 'flex' : isFiltered ? 'flex' : 'none'}
            direction='column'
            cursor='pointer'
            borderRadius='25px'
            userSelect='none'
            minW='165px'
            h='210px'
            bg={`linear-gradient(310deg, ${coverColors[0]}, ${coverColors[1]}, ${coverColors[2]})`}
            justifyContent='center'
            alignItems='center'
            onClick={() => handlePlayPauseMusic()}
            _hover={{
                transition: '0.2s',
                filter: 'brightness(1.1)'
            }}
        >
            <Box w="150px" h="150px" pos="relative" bg=''>
                <Image
                    src={cover}
                    alt={"Music cover"}
                    fill
                    style={{ objectFit: "fill", borderRadius: '25px' }}
                />
            </Box>
            <Box textAlign='center'>
                <Text color='foreground' fontWeight='600'>
                    {title}
                </Text>
                <Text fontWeight='300'>
                    {artist}
                </Text>
            </Box>
        </Flex >
    )
}