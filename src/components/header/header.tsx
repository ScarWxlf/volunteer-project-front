'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import logo from '/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    if(pathname === '/signin' || pathname === '/signup') return null;
    return(
        <div className="flex items-center flex-none md:justify-around justify-between h-20 bg-black text-white relative z-50">
            <Link className='flex text-center gap-1 text-xl font-bold justify-end md:px-0 px-10' href='/'>
                <Image className='' src={logo} alt="beb"/>
                <h1 className='mt-0.5'>CHARITY</h1>
            </Link>
            <div className="w-2/5 md:block hidden lg:w-2/6 xl:w-1/4">
                <div className='flex justify-around w-full'>
                    <Link className={`border-green-500 ${pathname === '/' ? 'border-b-[3px] text-green-500' : 'link' }`} href='/'>Home</Link>
                    <Link className={`border-green-500 ${pathname === '/causes' ? 'border-b-[3px] text-green-500' : 'link'}`} href='/causes'>Causes</Link>
                    <Link className={`border-green-500 ${pathname === '/about' ? 'border-b-[3px] text-green-500' : 'link'}`} href='/about'>About us</Link>
                    <Link className={`border-green-500 ${pathname === '/contacts' ? 'border-b-[3px] text-green-500' : 'link'}`} href='/contacts'>Contact us</Link>
                </div>
            </div>
            <div className='flex justify-end md:hidden w-1/6 px-10'>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`focus:outline-none transform transition-transform duration-300 ${
                        mobileMenuOpen ? "rotate-90" : ""
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        />
                    </svg>
                </button>
            </div>  
            <div className="md:block hidden">
                <div className='flex gap-12'>
                    <a className='link' href="/signin"><button>Sign in</button></a>
                    <a className='link' href="/signup"><button>Sign up</button></a>
                </div>
            </div>
            {mobileMenuOpen && <div className='w-full top-20 flex gap-32 justify-center absolute bg-black border-t border-white z-20 py-8 sm:px-20 px-4'>
                <div className='flex flex-col items-center gap-4 sm:text-xl text-md'>
                    <Link className={`border-green-500 ${pathname === '/' ? 'border-b-[3px] text-green-500' : 'link' }`} href='/'>Home</Link>
                    <Link className={`border-green-500 ${pathname === '/causes' ? 'border-b-[3px] text-green-500' : 'link'}`} href='/causes'>Causes</Link>
                    <Link className={`border-green-500 ${pathname === '/about' ? 'border-b-[3px] text-green-500' : 'link'}`} href='/about'>About us</Link>
                    <Link className={`border-green-500 ${pathname === '/contacts' ? 'border-b-[3px] text-green-500' : 'link'}`} href='/contacts'>Contact us</Link>
                </div>
                <div className='flex flex-col gap-6 sm:text-xl text-md justify-center items-center'>
                    <a className='link' href="/signin"><button>Sign in</button></a>
                    <a className='link' href="/signup"><button>Sign up</button></a>
                </div>
            </div>}
        </div>
    )
}