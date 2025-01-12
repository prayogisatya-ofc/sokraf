import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                const admin = await prisma.admin.findUnique({ where: { email } });
                if (!admin) {
                    throw new Error("Invalid email or password!");
                }

                const isValidPassword = await bcrypt.compare(password, admin.password);
                if (!isValidPassword) {
                    throw new Error("Invalid email or password!");
                }

                return {
                    id: admin.id,
                    name: admin.name,
                    email: admin.email
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return {...token, ...user};
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session;
        },
    },
    pages: {
        signIn: "/panel/login",
        error: "/panel/login",
    }
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };