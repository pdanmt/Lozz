'use client'

import { MusicContext } from "@/context/music";
import { Input } from "@chakra-ui/react";

export function SearchInput() {
    const { currentPlaylist, setFilteredMusics } = MusicContext()

    function handleFilterMusics(inputValue: string) {
        if (inputValue.length === 0) {
            setFilteredMusics([])
            return
        }

        const value = inputValue.trim().toLowerCase()
        const filteredMusics = currentPlaylist.filter(({ title }) => title.toLowerCase().includes(value))

        setFilteredMusics(filteredMusics)
    }

    return <Input
        variant='unstyled'
        placeholder="Busque uma música"
        p='1rem'
        w='25rem'
        borderRadius='25px'
        bg='gray.500'
        border='2px solid transparent'
        _focus={{ borderColor: 'gray.400' }}
        _placeholder={{ color: 'gray.300' }}
        onChange={(e) => handleFilterMusics(e.target.value)}
    />
}