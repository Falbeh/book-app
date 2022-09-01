import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='h-20 p-3 bg-white shadow-md fixed top-0 w-full z-50'>
            <div className="px-8 h-full max-w-7xl flex items-center m-auto">
                <Link href='/'> 
                    <a className="h-8">
                        <Image src="/open-book.png" alt="Vercel Logo" width={32} height={32} />
                    </a>
                </Link>
                {/* DESKTOP */}
                <div className="hidden md:flex justify-between w-full items-center">
                    <div className="flex">
                        <ul className='list-none ml-12 tracking-wide flex'>
                            <li className='mx-4 my-1'>
                                <Link href='/'>
                                    Home
                                </Link>
                            </li>
                            <li className='mx-4 my-1'>
                                <Link href='/library'>
                                    My library
                                </Link>
                            </li>
                            <li className='mx-4 my-1'>
                                <Link href='/friends'>
                                    Friends
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link href='/login'>
                            <a className="border-black border mx-2 py-2 px-4 rounded-full">Sign in</a>
                        </Link>  
                        <Link href='/signup'>
                            <a className="border-black border bg-black mx-2 text-white py-2 px-4 rounded-full">Join now</a>
                        </Link>
                    </div>
                </div>
                {/* MOBILE */}
                <div className="flex md:hidden"> 
                    <button onClick={() => setIsOpen(!isOpen)} type="button" ></button>
                </div>
            </div>

        </nav>
    )
}

export default Nav