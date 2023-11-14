import { User } from "firebase/auth";

export interface LoginPageProps{
    handleSignOut: () => void,
    user: User | null
}