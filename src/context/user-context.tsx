'use client'

import { ThereIsAUserLoggedIn } from "@/services/firebase"
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState
} from "react"

interface contextBody {
    user: userInfos | null
    setUser: Dispatch<SetStateAction<userInfos | null>>
}

export interface userInfos {
    uid: string
    name: string
    photo: string
}

const userContext = createContext({} as contextBody)

export function UserContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<userInfos | null>(null)

    useEffect(() => {
        const unsubscribe = ThereIsAUserLoggedIn(setUser)

        return () => unsubscribe()
    }, [])

    return (
        <userContext.Provider value={{
            setUser,
            user,
        }}>
            {children}
        </userContext.Provider>
    )
}

export const UserContext = () => useContext(userContext)