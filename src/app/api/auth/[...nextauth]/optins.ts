// src/app/api/auth/[...nextauth]/options.ts
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/database";
import User from "@/models/user.model";
import { RequestInternal } from "next-auth";

interface Credentials {
    email: string;
    password: string;
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Promise<any> {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }

                await dbConnect();

                try {
                    const user = await User.findOne({ email: credentials.email });

                    if (!user) {
                        throw new Error("User not found");
                    }

                    if (!user.password) {
                        throw new Error("User password not set");
                    }

                    const isPasswordValid = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );

                    if (!isPasswordValid) {
                        throw new Error("Invalid password");
                    }

                    return user;
                } catch (error) {
                    if (error instanceof Error) {
                        throw new Error(error.message);
                    }
                    throw new Error("Login failed");
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token._id = user._id;
                token.isVerified = user.isVerified;
                token.username = user.username;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string;
                session.user._id = token._id as string;
                session.user.isVerified = token.isVerified as boolean;
                session.user.username = token.username as string;
                session.user.email = token.email as string;
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};