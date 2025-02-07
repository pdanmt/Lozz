import { MusicBody, MusicContext } from "@/context/music"
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { Pause, Play } from "lucide-react"
import Image from "next/image"

export function MusicSlide({ artist, cover, id, music, title, index, category }: MusicBody) {
    const {
        musicAudio,
        setMusicInfos,
        setMusicAudio,
        musicInfos,
        playPauseMusic,
        isPlaying
    } = MusicContext()

    const isThisTheMusicPlaying = musicInfos?.id === id ? true : false

    function handlePlayPauseMusic() {
        if (!musicAudio) {
            const audio = new Audio(music)
            setMusicAudio(audio)
            setMusicInfos({ title, music, cover, id, artist, index, category })
            return
        }

        if (musicAudio && !isThisTheMusicPlaying) {
            musicAudio.pause()

            const audio = new Audio(music)
            setMusicAudio(audio)

            setMusicInfos({ title, cover, music, id, artist, index, category })
            return
        }

        if (musicAudio && isThisTheMusicPlaying) {
            playPauseMusic()
            return
        }
    }


    return (
        <Box
            w='inherit'
            h='inherit'
            pos='relative'
            borderRadius='20px'
            overflow='hidden'
            _hover={{
                'footer': {
                    opacity: '100%',
                    transform: 'translateY(0%)'
                }
            }}
        >
            <Image
                alt=''
                src={cover}
                fill
                priority={false}
                style={{ borderRadius: '20px', objectFit: 'cover' }}
            />
            <Flex
                as='footer'
                align='center'
                justifyContent='space-between'
                pos='absolute'
                bottom='0'
                w='100%'
                transform='translateY(110%)'
                transition='all 0.2s ease-in-out'
                p='1rem'
                bg='gray.350'
            >
                <Box>
                    <Text
                        color='foreground'
                        fontWeight='700'
                        fontSize={['lg', 'lg', 'xl']}
                    >
                        {title}
                    </Text>
                    <Text fontSize={['sm', 'sm', 'lg']}>
                        {artist}
                    </Text>
                </Box>
                <Button
                    bg='#ffffff50'
                    w='45px'
                    h='45px'
                    p='0'
                    borderRadius='50%'
                    _hover={{ bg: '#ffffff70' }}
                    onClick={() => handlePlayPauseMusic()}
                >
                    {(!isThisTheMusicPlaying || !isPlaying) && <Play />}
                    {isPlaying && isThisTheMusicPlaying && <Pause />}
                </Button>
            </Flex>
        </Box>
    )
}