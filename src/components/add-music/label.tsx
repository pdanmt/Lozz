import { FormLabel } from "@chakra-ui/react"
import { ReactNode } from "react"

interface LabelProps {
    children: ReactNode
    htmlFor: string
}

export function Label({ children, htmlFor }: LabelProps) {
    return (
        <FormLabel
            htmlFor={htmlFor}
            w='100%'
            border='2px solid'
            borderColor='gray.400'
            borderRadius='8px'
            p='0.5rem'
            display='flex'
            gap='0.5rem'
            cursor='pointer'
            color='gray.400'
            m='0 auto'
            _hover={{
                filter: 'brightness(1.3)'
            }}
        >
            {children}
        </FormLabel>
    )
}