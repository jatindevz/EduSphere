//src/app/api/auth/[...nextauth]/option.ts

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/database";
import User from "@/models/user.model";

type UserPros = {
    id: string;
    _id: string;
    username: string;
    email: string;
    isVerified: boolean;
    isSubscribtionisActive: boolean;
};



export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined): Promise<UserPros | null> {
                await dbConnect();
                try {
                    if (!credentials) {
                        throw new Error("Invalid credentials");
                    }


                    const email = credentials?.email;
                    const password = credentials?.password;

                    const user = await User.findOne({ email });

                    if (!user) {
                        throw new Error("User not found");
                    }


                    const isPasswordValid = await bcrypt.compare(password, user.password);
                    if(!isPasswordValid) {
                        throw new Error("Invalid password");
                    }

                    return {
                        id: user.id,
                        _id: user._id?.toString() ?? '',
                        username: user.username,
                        email: user.email,
                        isVerified: user.isVerified,
                        isSubscribtionisActive: user.isSubscribtionisActive,

                    };
                } catch (error: unknown) {
                    if (error instanceof Error) {
                        console.log("login failed", error.message);
                        throw new Error(error.message);
                    }
                    throw new Error("Unknown error occurred");
                }
            },
        }) 
    ],
    callbacks: {
        async session({ session  , token } ) {
            if(token) {
                session.user._id = token._id
                session.user.isVerified = token.isVerified
                session.user.username = token.username
                session.user.email = token.email
            }
            return session
        },
        
        async jwt({ token, user}) {
            if (user) {
                token._id = user._id?.toString()
                token.isVerified = user.isVerified
                token.username = user.username
                token.email = user.email
                

            }
            return token
        }
    },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,

};