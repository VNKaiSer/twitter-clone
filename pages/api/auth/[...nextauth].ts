import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import prisma from '@/libs/prismadb';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from "next-auth/providers/credentials"


export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'Email' },
                password: { label: 'Password', type: 'password' },
            },

            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) throw new Error('Invalid credentials');

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user)
                    throw new Error('Invalid credentials');

                const isCorrect = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword == null ? '' : user.hashedPassword);
                if (!isCorrect)
                    throw new Error('Invalid credentials');
                return user;
            }
        }),
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
});