import { User } from "firebase/auth";

export interface UserPageProps{
    handleSignOut: () => void,
    user: User | null
}