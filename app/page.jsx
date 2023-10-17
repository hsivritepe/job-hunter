import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-8 pt-8 justify-center">
            <div>Welcome to Job Hunter!</div>
            <Link
                href={'/login'}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg w-1/6 mx-auto text-center"
            >
                Login
            </Link>
        </div>
    );
}
