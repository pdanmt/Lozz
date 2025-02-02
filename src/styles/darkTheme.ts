'use client'

import { extendTheme } from "@chakra-ui/react";

export const darkTheme = extendTheme({
    styles: {
        global: {
            '*': {
                color: 'gray.100',
                boxSizing: 'border-box',
                padding: '0',
                margin: '0'
            },

            '.swiper-slide-shadow-left, .swiper-slide-shadow-right': {
                background: '#00000080',
                opacity: 0.8,
                width: '100%'
            },
            '.swiper-slide-shadow-left': {
                borderRadius: '20px'
            },
            '.swiper-slide-shadow-right': {
                transform: 'translateX(0%)',
                borderRadius: '20px'
            },

            'body::-webkit-scrollbar': {
                width: '10px'
            },
            'body::-webkit-scrollbar-track': {
                background: '#181b22'
            },
            'body::-webkit-scrollbar-thumb': {
                background: '#707075',
                borderRadius: '10px',
            }
        },
    },

    colors: {
        gray: {
            900: "#0B0E16",
            700: "#181b22",
            600: "#1e212a",
            500: "#23262E",
            450: '#303236',
            400: "#707075",
            350: '#70707570',
            300: "#CCD6DD",
            100: "#E1E8ED",
        },
        outlineThumb: '#CCD6DD40',
        foreground: '#fff',
        logo: '#EC6F1A',
        destructive: '#cc0000'
    },

    fontSizes: {
        sm: '0.9rem',
        normal: '1rem',
        lg: '1.275rem',
        xl: '1.5rem',
        '2xl': '2rem'
    },

    breakpoints: {
        sm: "400px",
        md: "800px",
        lg: "960px",
        xl: "1200px", 
    }
})