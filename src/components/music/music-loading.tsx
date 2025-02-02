import { Flex, Skeleton } from "@chakra-ui/react";

export function MusicLoading() {
    return (
        <Flex gap='1rem' overflow='auto'>
            {[1, 2, 3, 4, 5, 6].map((id) => (
                <Skeleton
                    key={id}
                    minW='165px'
                    minH='210px'
                    borderRadius='25px'
                    startColor='gray.500'
                    endColor='gray.450'
                    opacity={1}
                />
            ))}
        </Flex>
    )
}