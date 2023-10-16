import LoginButton from './LoginButton';

export default function Header() {
    return (
        <div className="flex flex-col items-center justify-center h-screen -m-16">
            <h1>Login to get started</h1>
            <LoginButton />
        </div>
    );
}
