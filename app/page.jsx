import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-8 pt-8 justify-center">
            <div>Welcome to Job Hunter!</div>
            <Link
                href={'/api/auth/signin'}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg w-1/2 md:w-1/4 sm:w-1/6 mx-auto text-center"
            >
                Login
            </Link>
        </div>
    );
}
