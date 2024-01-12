import GitHubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
import db from './db';

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        // EmailProvider({
        //     server: process.env.EMAIL_SERVER,
        //     from: process.env.EMAIL_FROM,
        // }),
    ],
    // adapter: PrismaAdapter(db),
    // session: {
    //     strategy: 'database',
    //     maxAge: 30 * 24 * 60 * 60, // 30 days
    // },
    pages: {
        signIn: '/auth/signin',
        verifyRequest: '/auth/verify-request',
    },
    callbacks: {
        async session(session, user) {
            session.user = user;
            return session;
        },
    },
    events: {
        async signIn({ user }) {
            console.log({ user }, 'Signed in.');
        },
    },
};
