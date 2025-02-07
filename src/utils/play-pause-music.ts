import { MusicBody } from "@/context/music"
import { Dispatch, SetStateAction } from "react"

interface PlayPauseMusicProps {
    musicAudio: HTMLAudioElement | null
    isThisTheMusicPlaying: boolean
    music: MusicBody
    playPauseMusic: () => void
    setMusicInfos: Dispatch<SetStateAction<MusicBody | null>>
    setMusicAudio: Dispatch<SetStateAction<HTMLAudioElement | null>>
}

export function PlayPauseMusic({
    musicAudio,
    isThisTheMusicPlaying,
    music,
    setMusicAudio,
    setMusicInfos,
    playPauseMusic
}: PlayPauseMusicProps) {
    if (!musicAudio) {
        const audio = new Audio(music.music)
        setMusicAudio(audio)
        setMusicInfos(music)
        return
    }

    if (musicAudio && !isThisTheMusicPlaying) {
        musicAudio.pause()

        const audio = new Audio(music.music)
        setMusicAudio(audio)

        setMusicInfos(music)
        return
    }

    if (musicAudio && isThisTheMusicPlaying) {
        playPauseMusic()
        return
    }
}