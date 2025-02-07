'use client'

import { MusicBody, MusicContext } from "@/context/music"
import { useState, useRef, useEffect } from "react"
import { SliderMusicControl } from "./slider"

export function MusicTempoControl() {
    const {
        musicAudio,
        setMusicAudio,
        setMusicInfos,
        musicInfos,
        currentPlaylist
    } = MusicContext()

    const [timeValue, setTimeValue] = useState<number>(0)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    function changeMusicCurrentTime(value: number) {
        if (musicAudio) {
            const { currentTime, duration } = musicAudio

            const currentPercentage = duration / 100
            musicAudio.currentTime = currentPercentage * value

            setTimeValue(currentTime * 100 / duration)
        }
    }

    useEffect(() => {
        if (musicAudio && musicAudio) {
            intervalRef.current = setInterval(() => {
                if (musicAudio) {
                    const { currentTime, duration } = musicAudio

                    const slideBarNewValue = currentTime * 100 / duration
                    setTimeValue(slideBarNewValue)

                    if (currentTime >= duration) {
                        clearInterval(intervalRef.current!)

                        const thisMusicIndex =
                            currentPlaylist.findIndex(({ id }) => id === musicInfos?.id) ?
                                currentPlaylist.findIndex(({ id }) => id === musicInfos?.id) :
                                -1
                        const checkIfThereIsNextSong = thisMusicIndex + 1 === currentPlaylist.length ? null : thisMusicIndex + 1
                        const nextMusic = checkIfThereIsNextSong !== null ? currentPlaylist[checkIfThereIsNextSong] : null

                        musicAudio.pause()
                        const audio = nextMusic ? new Audio(nextMusic.music) : null
                        setMusicAudio(audio)

                        setMusicInfos(nextMusic)

                        setTimeValue(0)
                        intervalRef.current = null
                    }
                }
            }, 1000)

            return () => {
                if (intervalRef.current) clearInterval(intervalRef.current)
            }
        }
    }, [musicAudio])

    return (
        <SliderMusicControl
            w={['100%', '100%', '100%', '45%']}
            onChange={(value) => changeMusicCurrentTime(value)}
            value={timeValue}
            aria-label="time music control"
        />
    )
}