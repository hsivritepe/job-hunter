import Link from 'next/link';
import ProfileIcon from './ProfileIcon';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between max-w mx-auto fixed left-0 right-0 px-[15rem] h-14 bg-blue-500 text-white">
            <Link className="font-bold" href={'/'}>
                Job Hunter
            </Link>
            <ProfileIcon />
        </nav>
    );
}
