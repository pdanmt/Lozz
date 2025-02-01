import axios from "axios"
import { NextRequest } from "next/server"

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id

    const cloudName = process.env.CLOUDINARY_CLOUDNAME
    const apiKey = process.env.CLOUDINARY_API_KEY
    const apiSecret = process.env.CLOUDINARY_API_SECRET

    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')

    try {
        const response = await axios.get(
            `https://api.cloudinary.com/v1_1/${cloudName}/resources/video/upload/${id}`,
            {
                headers: {
                    Authorization: `Basic ${auth}`,
                },
            }
        )

        const { display_name, secure_url } = response.data

        const music = { title: display_name, url: secure_url }

        return new Response(JSON.stringify(music), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.error(`Erro ao carregar música. Erro: ${error}`)
        return new Response(JSON.stringify([]), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}