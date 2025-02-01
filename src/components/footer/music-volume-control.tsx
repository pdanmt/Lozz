'use client'

import { Volume1, Volume2, VolumeOff } from "lucide-react";
import { FooterMusicControlButton } from "./footer-music-control-btn";
import { SliderMusicControl } from "./slider";
import { Box, Icon } from "@chakra-ui/react";
import { MusicContext } from "@/context/music";
import { useState } from "react";

export function MusicVolumeControl() {
    const { musicAudio } = MusicContext()
    const [volume, setVolume] = useState<number>(100)

    function setMusicVolume(value: number, type: 'range' | 'button') {
        if (musicAudio && musicAudio) {
            if (type === 'range') {
                musicAudio.volume = value / 100
                setVolume(value)
            } else {
                if (value === 0) {
                    musicAudio.volume = 1
                    setVolume(100)
                } else {
                    musicAudio.volume = 0
                    setVolume(0)
                }
            }
        }
    }

    return (
        <Box
            display={['none', 'none', 'none', 'flex']}
            alignItems='center'
            gap='1rem'
            w='150px'
            justifyContent='center'
            _hover={{
                '.slider': {
                    display: musicAudio ? 'block' : 'none'
                }
            }}
        >
            <FooterMusicControlButton
                musicAudio={musicAudio}
                onClick={() => setMusicVolume(volume, 'button')}
            >
                <Icon fontSize={['sm', 'sm', 'lg', 'xl']}>
                    {volume === 0 && <VolumeOff />}
                    {volume > 0 && volume <= 50 && <Volume1 />}
                    {volume > 50 && <Volume2 />}
                </Icon>
            </FooterMusicControlButton>
            <SliderMusicControl
                display='none'
                className='slider'
                w='80px'
                aria-label="volume music control"
                onChange={(value) => setMusicVolume(value, 'range')}
                value={volume}
            />
        </Box>
    )
}