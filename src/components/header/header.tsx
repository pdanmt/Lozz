import { Flex } from "@chakra-ui/react";
import { Heart, Settings } from "lucide-react";
import { ActionButtons } from "./action-button";
import { UserPhotoAndName } from "./user-photo-and-name";
import { UserContextProvider } from "@/context/user-context";
import { SmallScreenDrawer } from "./small-screen-drawer";
import { SearchInput } from "./search";

export function Header() {
    return (
        <Flex
            display='flex'
            justify='space-between'
            align='center'
            p='1.5rem 0 2rem'
            gap='1rem'
        >
            <SearchInput />
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