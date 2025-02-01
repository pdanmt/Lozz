'use client'

import { UserContext } from "@/context/user-context";
import { Box, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import Image from "next/image";

export function UserPhotoAndName() {
    const { user } = UserContext()

    if (user) {
        return (
            <Flex alignItems='center' gap='0.6rem'>
                <Box w='48px' h='48px' pos='relative' borderRadius='50%'>
                    <Image
                        src={user.photo}
                        alt=''
                        fill
                        style={{
                            borderRadius: '50%'
                        }}
                    />
                </Box>
                <Text color='foreground' fontWeight='500' fontSize={['normal', 'lg']}>
                    {user.name}
                </Text>
            </Flex>
        )
    }

    return (
        <Flex alignItems='center' gap='0.6rem'>
            <SkeletonCircle w='48px' h='48px' />
            <Skeleton w='5rem' h='1rem' />
        </Flex>
    )
}