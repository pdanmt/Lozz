import { db } from "@/firebase-config"
import { collection, getDocs } from "firebase/firestore"

export interface MusicsBody {
    title: string
    cover: string
    music: string
    artist: string
    category: string
    id: string
    index: number
}

export async function GET() {
    try {
        const response = await getDocs(collection(db, 'vacxCpHlPTbntMv3ihZxV28Dwr22'))
        const musics: MusicsBody[] = []

        response.docs.forEach((doc) => {
            musics.push({...doc.data(), id: doc.id} as MusicsBody)
        })

        return new Response(JSON.stringify(musics), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.error("Erro ao buscar os arquivos do Cloudinary:", error);
        return new Response(JSON.stringify([]), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}