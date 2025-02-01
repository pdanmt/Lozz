import { Flex, Input } from "@chakra-ui/react";
import { Heart, Settings } from "lucide-react";
import { ActionButtons } from "./action-button";
import { UserPhotoAndName } from "./user-photo-and-name";
import { UserContextProvider } from "@/context/user-context";
import { SmallScreenDrawer } from "./small-screen-drawer";

export function Header() {
    return (
        <Flex
            display='flex'
            justify='space-between'
            align='center'
            pt='1.5rem'
            gap='1rem'
        >
            <Input
                variant='unstyled'
                placeholder="Busque uma música"
                p='1rem'
                w='25rem'
                borderRadius='25px'
                bg='gray.500'
                border='2px solid transparent'
                _focus={{ borderColor: 'gray.400' }}
                _placeholder={{ color: 'gray.300' }}
            />
            <Flex
                alignItems='center'
                gap='0.6rem'
                display={['none', 'none', 'none', 'none', 'flex']}
            >
                <UserContextProvider>
                    <UserPhotoAndName />
                </UserContextProvider>
                <ActionButtons>
                    <Heart />
                </ActionButtons>
                <ActionButtons>
                    <Settings />
                </ActionButtons>
            </Flex>

            <SmallScreenDrawer />
        </Flex>
    )
}