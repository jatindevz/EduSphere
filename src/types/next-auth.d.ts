// src/types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
    interface User {
        _id: string;
        isVerified: boolean;
        username: string;
        email: string;
    }

    interface Session extends DefaultSession {
        user: {
            _id: string;
            isVerified: boolean;
            username: string;
            email: string;
        } & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        _id: string;
        isVerified: boolean;
        username: string;
        email: string;
    }
}