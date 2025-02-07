'use client'

import { MusicContext } from "@/context/music";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export function CategoryItem() {
    const { allMusics } = MusicContext()
    const categories = allMusics.map(({ category }) => category)
    const arrayUniqueCategories = Array.from(new Set(categories))

    return (
        <Flex wrap='wrap' gap='2rem' m='0 auto' justify='center'>
            {arrayUniqueCategories.map((category) => {
                const categoryCover = allMusics.find((music) => music.category === category)
                const categoryLink = category.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "")

                if (!categoryCover) {
                    return
                }

                return (
                    <Flex
                        w='300px'
                        h='300px'
                        pos='relative'
                        key={category}
                        cursor='pointer'
                        as={Link}
                        href={`/categories/${categoryLink}`}
                    >
                        <Text
                            pos='absolute'
                            w='100%'
                            h='100%'
                            zIndex='1'
                            bg='#00000070'
                            borderRadius='20px'
                            textAlign='center'
                            alignContent='center'
                            fontSize='lg'
                            fontWeight='600'
                            letterSpacing='1px'
                        >
                            {category}
                        </Text>
                        <Image
                            src={categoryCover.cover}
                            fill
                            alt=""
                            style={{
                                borderRadius: '20px',
                                filter: 'blur(4px)',
                            }}
                        />
                    </Flex>
                )
            })}
        </Flex>
    )
}