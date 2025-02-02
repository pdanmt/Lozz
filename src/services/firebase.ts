import { CustomizedToast } from "@/components/toast/customized-toast";
import { userInfos } from "@/context/user-context";
import { auth } from "@/firebase-config";
import {
    browserLocalPersistence,
    GoogleAuthProvider,
    setPersistence,
    signInWithPopup,
    signOut
} from "firebase/auth"
import { Dispatch, SetStateAction } from "react";

export async function Login() {
    const provider = new GoogleAuthProvider()
    
    setPersistence(auth, browserLocalPersistence)

    try {
        const { user } = await signInWithPopup(auth, provider)

        if (!user.displayName || !user.photoURL) {
            CustomizedToast('error', 'A conta tem infomações faltando, tente outra.')
            console.error('Algumas informações da sua conta (nome ou foto) estão faltando')
        } else {
            CustomizedToast('success', 'Login efetuado com sucesso!')
            setTimeout(() => location.replace('/'), 0)
        }
    } catch (error) {
        CustomizedToast('error', 'Algo deu errado. Por favor, tente novamente.')
        console.error(`Erro ao fazer login. Erro: ${error}`)
    }
}

export function ThereIsAUserLoggedIn(
    setUser: Dispatch<SetStateAction<userInfos | null>>
) {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
            if (user.displayName && user.photoURL) {
                setUser({
                    name: user.displayName,
                    photo: user.photoURL,
                    uid: user.uid
                })

            }
        } else if (!user && location.pathname !== '/login') {
            setTimeout(() => location.replace('/login'), 0)
        }
    })

    return unsubscribe
}

export async function SignOut() {
    if (!auth.currentUser) {
        CustomizedToast('error', 'Não há nenhum usuário logado.')
        return
    }

    try {
        await signOut(auth)
        CustomizedToast('success', 'Sua conta foi deslogada!')
    } catch (error) {
        CustomizedToast('error', 'Erro ao sair da conta. Por favor, tente novamente.')
        console.error(`Erro ao sair da conta. Erro: ${error}`)
    }
}