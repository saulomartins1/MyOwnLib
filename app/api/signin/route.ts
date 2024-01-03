import { NextResponse } from 'next/server';
import { signIn } from '@/app/lib/auth';

export const POST = async (request: any) => {
    const { email, password } = await request.json();
    try {
        await signIn("credentials", { email, password, redirect: false });
        return new NextResponse("Successfully signed in!", { status: 200 });
    } catch (error: any) {
        console.log(error);
        return new NextResponse("Invalid credentials. Please try again.", { status: 400 });
    }
}