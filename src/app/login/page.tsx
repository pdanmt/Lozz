import { Box, Flex, Text } from "@chakra-ui/react";
import { LoginButton } from "@/components/login/login-button";

export default function LoginPage() {
    return (
        <Flex
            m='1rem auto'
            align='center'
            justify='space-around'
            w={['90vw', '30vw']}
            minH='600px'
            p='1rem'
            border='2px solid'
            borderColor='gray.300'
            borderRadius='25px'
            bg='gray.500'
            direction='column'
            textAlign='center'
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