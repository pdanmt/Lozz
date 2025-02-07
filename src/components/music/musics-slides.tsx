'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Box, Flex, Skeleton, Text } from "@chakra-ui/react";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { MusicSlide } from './slide';
import { useEffect, useRef } from 'react';
import { MusicContext } from '@/context/music';
import { UserContext } from '@/context/user-context';

export function MusicsSlides() {
    const { user } = UserContext()
    const { musicInfos, allMusics, musicLoading } = MusicContext()
    const slideRef = useRef<SwiperRef>(null)

    useEffect(() => {
        if (musicInfos) {
            slideRef.current?.swiper.slideTo(musicInfos.index)
        }
    }, [musicInfos])

    if (user && !musicLoading && allMusics.length === 0) {
        return (
            <Flex m='2rem auto'>
                <Text fontSize='lg' fontWeight='600'>
                    Você ainda não adicionou músicas...
                </Text>
            </Flex>
        )
    }

    return (
        <Box
            h={['300px', '350px', '400px']}
            sx={{
                '.slide': {
                    w: ['300px', '350px', '400px'],
                    h: ['300px', '350px', '400px']
                }
            }}
        >
            <Swiper
                modules={[EffectCoverflow, Pagination]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView='auto'
                initialSlide={2}
                ref={slideRef}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 150,
                    depth: 130,
                    modifier: 1,
                    slideShadows: true,
                }}
            >
                {musicLoading || !user && [1, 2, 3, 4, 5].map((id) => (
                    <SwiperSlide
                        key={id}
                        className='slide'
                    >
                        <Skeleton
                            w='inherit'
                            h='inherit'
                            borderRadius='20px'
                            startColor='gray.500'
                            endColor='gray.450'
                            opacity={1}
                        />
                    </SwiperSlide>
                ))}

                {!musicLoading && user && allMusics.map(({ cover, id, title, artist, music, index, category }) => (
                    <SwiperSlide
                        key={id}
                        className='slide'
                    >
                        <MusicSlide
                            artist={artist}
                            cover={cover}
                            id={id}
                            title={title}
                            music={music}
                            index={index}
                            category={category}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}