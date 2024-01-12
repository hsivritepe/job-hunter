import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function withAuth(Component) {
    return function ProtectedRoute({ ...props }) {
        const { data: session, loading } = useSession();
        const router = useRouter();

        useEffect(() => {
            if (!(session || loading)) {
                router.push('/api/auth/signin');
            }
        }, [session, loading]);

        if (session) {
            return <Component {...props} />;
        }

        return null;
    };
}
