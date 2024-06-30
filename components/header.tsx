import Link from 'next/link'
import React from 'react'

const LinksArray: string[] = ['トップページ', '写真一覧']

export const Header = () => {
    return (
        <header className="bg-muted px-4 lg:px-6 h-14 flex items-center">
            <Link href="/" className="flex items-center justify-center" prefetch={false}>
                <PawPrintIcon className="h-6 w-6" />
                <span className="sr-only">Paw-some Pets</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                {LinksArray.map((Links, index) => {
                    return (
                        <Link key={index}
                            href="/"
                            className="text-sm font-medium hover:underline underline-offset-4"
                            prefetch={false}
                        >
                            {Links}
                        </Link>
                    )
                })}
            </nav>
        </header>
    )
}

function PawPrintIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="4" r="2" />
            <circle cx="18" cy="8" r="2" />
            <circle cx="20" cy="16" r="2" />
            <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
        </svg>
    )
}