import logo from '/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return(
        <div className="flex items-center flex-none justify-around h-20 bg-black text-white">
            <div className='flex text-center gap-1 text-xl font-bold'>
                <Image className='' src={logo} alt="beb"/>
                <h1 className='mt-0.5'>CHARITY</h1>
            </div>
            <div className="flex justify-around w-1/4">
                <Link href='/'>Home</Link>
                <Link href='/causes'>Causes</Link>
                <Link href='/about'>About us</Link>
                <Link href='/contact'>Contact us</Link>
            </div>
            <div className="flex gap-12">
                <a href="/signin"><button>Sign in</button></a>
                <a href="/signup"><button>Sign up</button></a>
            </div>
        </div>
    )
}