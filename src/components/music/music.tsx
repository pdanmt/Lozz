'use client'

import { Box, Flex, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import { AudioMusicPlayer } from "./audio-music-player";
import { MusicContext } from "@/context/music";
import { UserContext } from "@/context/user-context";
import { MusicLoading } from "./music-loading";

export function Music() {
    const { user } = UserContext()
    const { musicLoading, allMusics } = MusicContext()

    if (musicLoading || !user) {
        return <MusicLoading />
    }

    return (
        <>
            {
                allMusics.map(({
                    artist,
                    cover,
                    id,
                    index,
                    music,
                    title
                }) => (
                    <AudioMusicPlayer
                        cover={cover}
                        id={id}
                        artist={artist}
                        music={music}
                        title={title}
                        index={index}
                        key={id}
                    >
                        <Box w="150px" h="150px" pos="relative" bg=''>
                            <Image
                                src={cover}
                                alt={"Music cover"}
                                fill
                                style={{ objectFit: "fill", borderRadius: '25px' }}
                            />
                        </Box>
                    </AudioMusicPlayer>
                )
                )}
        </>
    )
}
