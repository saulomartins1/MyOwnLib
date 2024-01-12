import { IconGoogle } from "@/app/assets/svgIcons"
import { handleGoogleSignIn } from "@/app/lib/actions"

export const SignInWithGoogle = () => {
    return <form action={handleGoogleSignIn}>
        <button className='flex gap-2 items-center hover:bg-dark3 transition-colors p-4 rounded-full text-c100 font-bold text-14'>
            <IconGoogle /> Sign In with Google
        </button>
    </form>
}