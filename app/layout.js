import './globals.css'
import Image from 'next/image'

import logo from '../public/images/logo.png'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>

                <header className="bg-white mb-10">
                    <nav className="flex items-center justify-between p-6 lg:px-8">
                        <div className="flex lg:flex-1">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Image className="h-40 w-auto" src={logo} alt="Logo" />
                            </a>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            <a href="#" className="text-sm/6 font-semibold text-gray-900">Product</a>
                            <a href="#" className="text-sm/6 font-semibold text-gray-900">Features</a>
                            <a href="#" className="text-sm/6 font-semibold text-gray-900">Marketplace</a>
                            <a href="#" className="text-sm/6 font-semibold text-gray-900">Company</a>
                        </div>
                    </nav>
                </header>
                {children}

                <footer className="bg-slate-600 mt-10 text-white">
                    <div className="p-10 text-center">© 2024 Prokaash. All rights reserved.</div>
                </footer>

            </body>
        </html>
    )
}