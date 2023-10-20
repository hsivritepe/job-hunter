import Link from 'next/link';

export default function MainTitle({ title, description, button }) {
    return (
        <>
            <div className="py-6 flex justify-between">
                <div>
                    <h1 className="text-blueGray-900 text-2xl font-semibold">
                        {title}
                    </h1>
                    <p className="pt-5 text-cyan-900">
                        {description}
                    </p>
                </div>
                {button && (
                    <Link
                        href={buttonLink}
                        className="btn bg-green-500 hover:bg-green-600 px-6 normal-case text-neutral-100"
                    >
                        {icon} {buttonText}
                    </Link>
                )}
            </div>
        </>
    );
}
