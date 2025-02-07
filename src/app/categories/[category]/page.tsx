'use client'

import { AudioMusicPlayer } from "@/components/music/audio-music-player";
import { MusicContext } from "@/context/music";
import { Flex, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";

export default function Category() {
    const params: { category: string } = useParams()
    const { allMusics } = MusicContext()

    const pageTitle = allMusics.find(({ category }) => {
        return category.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "") === params.category
    })

    return (
        <Flex gap='2rem' align='center' direction='column'>
            <Text fontSize='lg' fontWeight='bold' letterSpacing='1px'>
                Músicas da categoria {pageTitle?.category.toLowerCase()}
            </Text>
            <Flex gap='1.5rem' wrap='wrap' justify='center'>
                {allMusics.filter(({ category }) => {
                    return category.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "") === params.category
                }).map(({
                    artist,
                    category,
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
                        category={category}
                    />
                ))}
            </Flex>
        </Flex>
    )
}