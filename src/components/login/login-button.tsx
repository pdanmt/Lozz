'use client'

import { Login } from "@/services/firebase"
import { Box, Button } from "@chakra-ui/react"
import Image from "next/image"
import GoogleLogo from '../../../public/googleLogo.svg'

export function LoginButton() {
    return (
        <Button
            flexWrap='wrap'
            h='auto'
            p='0.5rem'
            bg='foreground'
            color='gray.600'
            display='flex'
            gap='0.5rem'
            _hover={{
                bg: 'gray.300',
                color: 'gray.900'
            }}
            onClick={() => Login()}
        >
            <Box w={['20px', '20px', '25px', '25px']} h={['20px', '20px', '25px', '25px']} pos='relative'>
                <Image src={GoogleLogo} alt="" fill />
            </Box>
            Entre com sua conta Google
        </Button>
    )
}