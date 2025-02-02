'use client'

import { MusicContext } from "@/context/music";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import defaultCover from '../../../public/defaultCover.svg'
import { MusicTempoControl } from "./music-tempo-control";
import { MusicVolumeControl } from "./music-volume-control";
import { GoBackPlayForwardMusic } from "./go-back-play-forward-music";

export function Footer() {
    const { musicInfos } = MusicContext()

    return (
        <Flex
            as='footer'
            pos='fixed'
            bottom='0'
            left='0'
            bg='gray.600'
            w='100vw'
            justify='space-around'
            p={['0 0.5rem', '0 0.5rem', '0 0.5rem', '0 2rem']}
            align='center'
            h='10vh'
            gap='1rem'
        >
            {/* Capa e título */}
            <Flex align='center' gap={['0.2rem', '0.4rem', '0.6rem', '1rem']}>
                <Box
                    w={['35px', '35px', '45px', '58px']}
                    h={['35px', '35px', '45px', '58px']}
                    pos='relative'
                >
                    <Image
                        alt='Cover music image'
                        src={musicInfos?.cover || defaultCover}
                        fill
                        style={{
                            borderRadius: '50%',
                            outline: musicInfos ? 'none' : '2px solid #CCD6DD40'
                        }}
                    />
                </Box>
                <Box
                    display={musicInfos ? 'block' : 'none'}
                    lineHeight={['1.1', '1.1', '1.3', '1.6']}
                    w={['50px', '50px', '60px', '100px']}
                >
                    <Text
                        color='foreground'
                        fontSize={['0.8rem', '0.8rem', 'normal', 'lg']}
                        fontWeight='600'
                    >
                        {musicInfos?.title.slice(0, 5).concat('...') || 'Selecione uma música'}
                    </Text>
                    <Text fontWeight='300' fontSize={['0.7rem', '0.7rem', 'sm', 'normal']}>
                        {musicInfos?.artist || ''}
                    </Text>
                </Box>
            </Flex>

            {/* Voltar, pausar/tocar e avançar música */}
            <GoBackPlayForwardMusic />

            {/* Contole de tempo */}
            <MusicTempoControl />

            {/* Controle de volume */}
            <MusicVolumeControl />
        </Flex>
    )
}