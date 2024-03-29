import './globals.css';
import { Inter } from 'next/font/google';
import { NextAuthProvider } from './provider';
import { getServerSession } from 'next-auth';
import { authOptions } from './helpers/nextAuth';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
    const session = await getServerSession(authOptions);

    return (
        <html lang="en">
            <body
                className={`${inter.className} px-[2rem] sm:px-[5rem]`}
            >
                <NextAuthProvider session={session}>
                    <Header />
                    <div className="pt-4">{children}</div>
                </NextAuthProvider>
            </body>
        </html>
    );
}
