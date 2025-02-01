import { Box, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FooterMusicControlButtonProps extends ButtonProps {
    children: ReactNode
    musicAudio: HTMLAudioElement | null
}

export function FooterMusicControlButton({
    children,
    musicAudio,
    ...props
}: FooterMusicControlButtonProps) {
    return <Box
        as='button'
        cursor='pointer'
        variant='unstyled'
        display='flex'
        alignItems='center'
        disabled={!musicAudio}
        _disabled={{ opacity: '0.6' }}
        {...props}
    >
        {children}
    </Box>
}