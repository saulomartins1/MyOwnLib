import { signIn, signOut } from "./auth";

export const handleGoogleSignIn = async () => {
    "use server"
    await signIn("google", { redirectTo: "/" });
}

export const handleSignOut = async () => {
    "use server"
    await signOut({ redirectTo: "/signin" });
}