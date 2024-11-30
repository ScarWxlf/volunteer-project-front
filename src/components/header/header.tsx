'use client'
import { usePathname } from 'next/navigation'
import logo from '/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const pathname = usePathname();
    return(
        <div className="flex items-center flex-none justify-around h-20 bg-black text-white">
            <Link className='flex text-center gap-1 text-xl font-bold' href='/'>
                <Image className='' src={logo} alt="beb"/>
                <h1 className='mt-0.5'>CHARITY</h1>
            </Link>
            <div className="flex justify-around w-1/4">
                <Link className={`border-green-500 ${pathname === '/' ? 'border-b-[3px] text-green-500' : 'link' }`} href='/'>Home</Link>
                <Link className={`border-green-500 ${pathname === '/causes' ? 'border-b-[3px] text-green-500' : 'link'}`} href='/causes'>Causes</Link>
                <Link className={`border-green-500 ${pathname === '/about' ? 'border-b-[3px] text-green-500' : 'link'}`} href='/about'>About us</Link>
                <Link className={`border-green-500 ${pathname === '/contacts' ? 'border-b-[3px] text-green-500' : 'link'}`} href='/contacts'>Contact us</Link>
            </div>
            <div className="flex gap-12">
                <a href="/signin"><button>Sign in</button></a>
                <a href="/signup"><button>Sign up</button></a>
            </div>
        </div>
    )
}