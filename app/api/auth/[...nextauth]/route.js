import NextAuth from 'next-auth';
import { authOptions } from '@/app/helpers/nextAuth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
