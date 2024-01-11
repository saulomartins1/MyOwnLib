import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connectDB from "@/app/lib/connectMongo";
import User from "@/app/models/user";
import bcrypt from 'bcrypt';
import { authConfig } from "@/app/lib/auth.config";

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    await connectDB();
                    const user = await User.findOne({ email: credentials.email })

                    if (!user) {
                        throw new Error("Invalid email, try again!");
                    }
                    const isPassValid = await bcrypt.compare(credentials.password as string, user.password);
                    if (!isPassValid) {
                        throw new Error("Invalid password, try again!");
                    }
                    return user;
                } catch (error: any) {
                    throw new Error(error);
                }
            }
        })
    ],
    callbacks: {
        async signIn(user: any) {
            if (user.account.provider === "google") {
                try {
                    connectDB();
                    const userExists = await User.findOne({ email: user.profile.email })
                    if (!userExists) {
                        const newUser = new User({ email: user.profile.email });
                        await newUser.save();
                    }

                } catch (error: any) {
                    console.log(error);
                    return false;
                }
            }
            return true;
        },
        ...authConfig.callbacks,
    },
})