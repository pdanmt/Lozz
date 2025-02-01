import { UserContextProvider } from "@/context/user-context";
import { ReactNode } from "react";

export default function AddMusicLayout({ children }: { children: ReactNode }) {
    return (
        <UserContextProvider>
            {children}
        </UserContextProvider>
    )
}