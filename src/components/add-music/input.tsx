import { Input, InputProps } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

interface AddMusicInputProps extends InputProps {
    registerName: string
}

export function AddMusicInput({ registerName, ...props }: AddMusicInputProps) {
    const { register } = useFormContext()

    return (
        <Input
            variant='unstyled'
            type="text"
            border='2px solid'
            borderColor='gray.400'
            borderRadius='8px'
            p='0.5rem'
            required
            _placeholder={{
                color: 'gray.400',
                fontWeight: '600'
            }}
            {...register(registerName)}
            {...props}
        />
    )
}