'use client'

import { Label } from "@/components/add-music/label"
import { Button, Flex, Input, Text } from "@chakra-ui/react"
import axios from "axios"
import { FileMusic, ImageUp } from "lucide-react"
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddMusicInput } from "@/components/add-music/input"
import { UserContext } from "@/context/user-context"
import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/firebase-config"
import { CustomizedToast } from "@/components/toast/customized-toast"

export default function AddMusic() {
    const { user } = UserContext()
    const [loading, setLoading] = useState<boolean>(false)

    const addMusicSchema = z.object({
        musicFile: z.instanceof(File).nullable(),
        coverFile: z.instanceof(File).nullable(),
        title: z.string().min(1, 'O título é obrigatório'),
        category: z.string().min(1, 'A categoria é obrigatória'),
        artist: z.string().min(1, 'O nome do artista é obrigatório')
    })

    type addMusicType = z.infer<typeof addMusicSchema>

    const addMusicForm = useForm<addMusicType>({
        resolver: zodResolver(addMusicSchema)
    })

    const { handleSubmit, watch, reset, setValue } = addMusicForm

    const musicFile = watch('musicFile')
    const coverFile = watch('coverFile')

    function handleFileChange(name: keyof addMusicType, fileList: FileList | null) {
        const file = fileList?.[0] || null
        setValue(name, file, { shouldValidate: true })
    }

    async function uploadMusic(data: addMusicType) {
        if (!data.musicFile || !data.coverFile) return

        if (data.musicFile.type !== 'audio/mpeg') {
            console.error('O formato da música deve ser .mp3')
            return
        }

        if (data.musicFile.size / 1024 / 1024 > 5 || data.coverFile.size / 1024 / 1024 > 5) {
            console.error('O arquivo ultrapassa o tamanho máximo permitido (5mb)')
            return
        }

        setLoading(true)

        const musicData = new FormData()
        const coverData = new FormData()

        musicData.append('file', data.musicFile)
        musicData.append('upload_preset', 'music-preset')

        coverData.append('file', data.coverFile)
        coverData.append('upload_preset', 'cover-preset')

        try {
            const musicResponse = await axios.post('https://api.cloudinary.com/v1_1/nyaudt-pdd/video/upload', musicData)

            coverData.append('public_id', musicResponse.data.public_id)
            const coverResponse = await axios.post('https://api.cloudinary.com/v1_1/nyaudt-pdd/image/upload', coverData)

            if (user) {
                addDoc(collection(db, user.uid), {
                    cover: coverResponse.data.secure_url,
                    music: musicResponse.data.secure_url,
                    title: data.title,
                    artist: data.artist,
                    category: data.category
                })
            } else {
                CustomizedToast('error', 'Usuário não logado.')
            }

            setLoading(false)
            CustomizedToast('success', 'Música enviada com sucesso!')
            reset()
        } catch (error) {
            console.error(`Erro ao enviar arquivo. Erro: ${error}`)
            setLoading(false)
            CustomizedToast('error', 'Erro ao enviar música, tente novamente.')
        }
    }

    return (
        <Flex
            direction='column'
            gap='1.3rem'
            justifyContent='center'
            align='center'
            minH='90vh'
            w={['100%', '100%', '100%', '100%', '75%']}
            m={['auto', 'auto', 'auto', 'auto', '0 0 11.5vh auto']}
        >
            <FormProvider {...addMusicForm}>
                <Flex
                    as='form'
                    bg='gray.600'
                    minH='500px'
                    w={['95vw', '950vw', '90vw', '600px']}
                    align='center'
                    justify='center'
                    direction='column'
                    borderRadius='25px'
                    p={['0 0.5rem', '0 0.5rem', '0 2rem']}
                    border='2px solid'
                    borderColor='gray.300'
                    gap='1.5rem'
                    onSubmit={handleSubmit(uploadMusic)}
                >
                    <Label htmlFor="audioInput">
                        {musicFile && (
                            <Text>{musicFile.name}</Text>
                        )}

                        {!musicFile && (
                            <>
                                <FileMusic color='gray' />
                                Escolha uma música
                            </>
                        )}
                    </Label>
                    <Input
                        type="file"
                        required
                        accept="audio/mpeg"
                        display='none'
                        id='audioInput'
                        onChange={(e) => handleFileChange('musicFile', e.target.files)}
                    />

                    <Label htmlFor="imageInput">
                        {coverFile && (
                            <Text>{coverFile.name}</Text>
                        )}

                        {!coverFile && (
                            <>
                                <ImageUp color='gray' />
                                Escolha a capa da música
                            </>
                        )}
                    </Label>
                    <Input
                        type="file"
                        required
                        accept="image/*"
                        id='imageInput'
                        display='none'
                        onChange={(e) => handleFileChange('coverFile', e.target.files)}
                    />

                    <AddMusicInput
                        registerName="title"
                        placeholder="Digite o título da música"
                        maxLength={20}
                    />

                    <AddMusicInput
                        registerName="category"
                        placeholder="Digite a categoria da música"
                        maxLength={20}
                    />

                    <AddMusicInput
                        registerName="artist"
                        placeholder="Digite o nome do artista"
                        maxLength={20}
                    />

                    <Button
                        w='50%'
                        bg='transparent'
                        border='2px solid'
                        borderColor='gray.300'
                        color='foreground'
                        isDisabled={!coverFile || !musicFile || loading}
                        _disabled={{
                            cursor: loading ? 'wait' : 'not-allowed',
                            opacity: '0.6'
                        }}
                        variant='ghost'
                        type='submit'
                        sx={{
                            '&:not([disabled]):hover': {
                                color: 'gray.500',
                                bg: 'gray.100'
                            }
                        }}
                    >
                        {loading ? 'Enviando música...' : 'Enviar música'}
                    </Button>
                </Flex>
            </FormProvider>
        </Flex>
    )
}