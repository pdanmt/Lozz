import { Box, Flex, Text } from "@chakra-ui/react";
import { LoginButton } from "@/components/login/login-button";

export default function LoginPage() {
    return (
        <Flex
            m='auto'
            align='center'
            justify='space-around'
            w={['90vw', '90vw', '90vw', '500px']}
            h='500px'
            p='1rem'
            border='2px solid'
            borderColor='gray.300'
            borderRadius='25px'
            bg='gray.500'
            direction='column'
            textAlign='center'
            overflow='hidden'
        >
            <Box>
                <Text
                    fontSize='xl'
                    color='foreground'
                    wordBreak='break-word'
                >
                    Entre para começar a usar!
                </Text>
                <Text fontSize='sm' color='gray.300'>
                    Entre no RhythmoTune para enviar suas músicas e usar o player
                </Text>
            </Box>
            <LoginButton />
        </Flex>
    )
}