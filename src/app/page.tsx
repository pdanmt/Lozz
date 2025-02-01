import { MusicContextProvider } from "@/context/music"
import { Box, Flex, Text } from "@chakra-ui/react"
import { Footer } from "@/components//footer/footer"
import { Music } from "@/components/music/music"
import { Header } from "@/components/header/header"
import { MusicsSlides } from "@/components/music/musics-slides"
import { SideBar } from "@/components/side-bar/side-bar"
import { UserContextProvider } from "@/context/user-context"

export interface MusicFilesBody {
  id: string
  coverUrl: string
  title: string
}

export interface MusicsBody {
  title: string
  cover: string
  music: string
  artist: string
  category: string
  id: string
  index: number
}

export const revalidate = 10

export default function Home() {
  return (
    <Flex
      direction='column'
      gap='2rem'
      m='0 0 11.5vh auto'
      w={['100%', '100%', '100%', '100%', '75%']}
      p={['0 0.5rem', '0 0.5rem', '0 0.5rem', '0 0.5rem', '0 2rem']}
    >
      <Header />
      <UserContextProvider>
        <MusicContextProvider>
          <Box
            display='flex'
            flexDir='column'
            gap='2rem'
            minH='85vh'
          >
            <MusicsSlides />
            <Flex direction='column' gap='1rem'>
              <Text fontSize='xl' fontWeight='600' color='foreground'>
                Suas músicas
              </Text>
              <Flex
                gap='1rem'
                overflow='auto'
                sx={{
                  '&::-webkit-scrollbar': {
                    height: '10px',
                  },
                  '&::-webkit-scrollbar-track': {
                    bg: 'transparent'
                  },
                  '&::-webkit-scrollbar-thumb': {
                    bg: 'gray.400',
                    borderTop: '6px solid',
                    borderColor: 'gray.900',
                    cursor: 'pointer'
                  }
                }}
              >
                <Music />
              </Flex>
            </Flex>
          </Box>
          <Footer />
        </MusicContextProvider>
      </UserContextProvider>
    </Flex>
  )
}
