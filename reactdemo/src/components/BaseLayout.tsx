import React from 'react';
import Link from 'next/link';

export default function BaseLayout({ children }) {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/">
                        <a className="text-white text-2xl font-bold">MyWebsite</a>
                    </Link>
                    <div className="flex space-x-4">
                        <Link href="/">
                            <a className="text-white hover:underline">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="text-white hover:underline">About</a>
                        </Link>
                    </div>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </div>
    );
};
