import { Box, Flex } from "@chakra-ui/react"
import { Footer } from "@/components//footer/footer"
import { Music } from "@/components/music/music"
import { Header } from "@/components/header/header"
import { MusicsSlides } from "@/components/music/musics-slides"

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
      m='0 0 11.5vh auto'
      w={['100%', '100%', '100%', '100%', '75%']}
      p={['0 0.5rem', '0 0.5rem', '0 0.5rem', '0 0.5rem', '0 2rem']}
    >
      <Header />
      <Box
        display='flex'
        flexDir='column'
        gap='2rem'
        minH='85vh'
      >
        <MusicsSlides />
        <Music />
      </Box>
      <Footer />
    </Flex>
  )
}
