'use client'

import { MusicsBody } from "@/app/page";
import { db } from "@/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {
    createContext,
    Dispatch,
    ReactNode,
    RefObject,
    SetStateAction,
    useContext,
    useEffect,
    useState
} from "react";
import { UserContext } from "./user-context";

interface MusicContextType {
    isPlaying: boolean
    musicLoading: boolean
    musicInfos: MusicBody | null
    musicAudio: HTMLAudioElement | null
    allMusics: [] | MusicBody[]
    playPauseMusic: () => void
    setMusicAudio: Dispatch<SetStateAction<HTMLAudioElement | null>>
    setMusicInfos: Dispatch<SetStateAction<MusicBody | null>>
}

export interface MusicBody {
    title: string
    cover: string
    music: string
    artist: string
    id: string
    index: number
}

export const musicContext = createContext({} as MusicContextType)

export function MusicContextProvider({ children }: { children: ReactNode }) {
    const { user } = UserContext()

    const [musicAudio, setMusicAudio] = useState<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [musicLoading, setMusicLoading] = useState<boolean>(false)
    const [musicInfos, setMusicInfos] = useState<MusicBody | null>(null)
    const [allMusics, setAllMusics] = useState<MusicBody[] | []>([])

    useEffect(() => {
        async function GetMusics() {
            if (user) {
                try {
                    setMusicLoading(true)
                    const response = await getDocs(collection(db, user.uid))

                    response.docs.forEach((doc, index) => {
                        setAllMusics((prev) => {
                            return [...prev, { ...doc.data(), id: doc.id, index } as MusicsBody]
                        })
                    })

                    setMusicLoading(false)
                } catch (error) {
                    console.error("Erro ao buscar os dados no Firebase:", error)
                    return []
                }
            }
        }

        GetMusics()
    }, [user])

    useEffect(() => {
        playPauseMusic()
    }, [musicAudio])

    function playPauseMusic() {
        if (musicAudio) {
            if (!isPlaying || musicAudio.paused) {
                musicAudio.play()
                setIsPlaying(true)
            } else {
                musicAudio.pause()
                setIsPlaying(false)
            }
        }
    }

    return (
        <musicContext.Provider value={{
            setMusicAudio,
            musicAudio,
            playPauseMusic,
            isPlaying,
            setMusicInfos,
            musicInfos,
            allMusics,
            musicLoading
        }}>
            {children}
        </musicContext.Provider>
    )
}

export const MusicContext = () => useContext(musicContext)