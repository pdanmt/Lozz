import { MusicBody, MusicContext } from "@/context/music"
import { Button, Box, Icon } from "@chakra-ui/react"
import { SkipBack, Pause, Play, SkipForward } from "lucide-react"
import { FooterMusicControlButton } from "./footer-music-control-btn"

export function GoBackPlayForwardMusic() {
    const {
        setMusicInfos,
        musicInfos,
        playPauseMusic,
        musicAudio,
        isPlaying,
        setMusicAudio,
        allMusics
    } = MusicContext()

    function skipOrGoBackMusic(type: 'skip' | 'goBack') {
        const thisMusicIndex = allMusics.findIndex(({ id }) => id === musicInfos?.id)
        const getMusic = () => {
            switch (type) {
                case 'goBack':
                    const checkIfThereIsPrevSong = thisMusicIndex === 0 ? thisMusicIndex : thisMusicIndex - 1
                    return allMusics[checkIfThereIsPrevSong]
                case 'skip':
                    const checkIfThereIsNextSong = thisMusicIndex + 1 === allMusics.length ? thisMusicIndex : thisMusicIndex + 1
                    return allMusics[checkIfThereIsNextSong]
            }
        }

        const music = getMusic()

        if (musicAudio && allMusics[thisMusicIndex].id !== music.id) {
            try {
                musicAudio.pause()
                musicAudio.currentTime = 0

                const audio = new Audio(music.music)
                setMusicAudio(audio)
                setMusicInfos(music)
            } catch (error) {
                console.error(`Ocorreu um erro ao carregar esta música. Erro: ${error}`)
            }
        }
    }

    return (
        <Box
            display='flex'
            alignItems='center'
            gap={['0.3rem', '0.5rem', '1rem']}
        >
            <FooterMusicControlButton
                musicAudio={musicAudio}
                onClick={() => skipOrGoBackMusic('goBack')}
            >
                <Icon as={SkipBack} fontSize={['normal', 'normal', 'lg', 'xl']} />
            </FooterMusicControlButton>

            <Box
                as='button'
                h='auto'
                w='auto'
                bg='outlineThumb'
                borderRadius='50%'
                p={['0.2rem', '0.3rem', '0.4rem']}
                boxSizing='border-box'
                transition='0.2s'
                cursor='pointer'
                disabled={!musicAudio}
                _hover={{ bg: 'gray.400' }}
                display='flex'
                alignItems='center'
                _disabled={{ opacity: '0.6' }}
                onClick={() => playPauseMusic()}
            >
                <Icon fontSize={['normal', 'normal', 'lg', 'xl']}>
                    {isPlaying && <Pause />}
                    {!isPlaying && <Play />}
                </Icon>
            </Box>

            <FooterMusicControlButton
                musicAudio={musicAudio}
                onClick={() => skipOrGoBackMusic('skip')}
            >
                <Icon as={SkipForward} fontSize={['normal', 'normal', 'lg', 'xl']} />
            </FooterMusicControlButton>
        </Box>
    )
}