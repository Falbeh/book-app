import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase/clientApp'
import Logout from './Logout'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);   
    const [user, setUser] = useState({});
    
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    },[])
   
    return (
        <>
        <nav className='h-20 p-3 bg-white shadow-bottom-outer fixed top-0 w-full z-50'>
            <div className="px-8 h-full max-w-7xl flex items-center m-auto justify-between">
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
                                <Link href='/about'>
                                    About
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
                <div className="w-12 md:hidden cursor-pointer p-2" onClick={() => setIsOpen(!isOpen)}>
                    <div className={`h-0.5 w-full m-1 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : 'rotate-0'}`}></div>
                    <div className={`h-0.5 w-full m-1 bg-black ${isOpen ? 'hidden' : 'block'}`}></div>
                    <div className={`h-0.5 w-full m-1 bg-black transition-all  ${isOpen ? '-rotate-45' : 'rotate-0'}`}></div>
                </div>
                <div className={`fixed z-10 h-full right-0 top-20 bg-white flex flex-col px-10 transition-all pt-10 w-4/5 shadow-top-inner ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className='list-none tracking-wide flex flex-col text-2xl font-bold'>
                        <li className='mx-4 my-6'>
                            <Link href='/'>
                                <a onClick={() => setIsOpen(!isOpen)}>Home</a>
                            </Link>
                        </li>
                       
                        <li className='mx-4 my-6'>
                            <Link href='/about'>
                                <a onClick={() => setIsOpen(!isOpen)}>About</a>
                            </Link>
                        </li>
                        {!user &&  
                            <>
                            <li className='mx-4 my-6'>
                                <Link href='/login'>
                                    <a className="border-black border py-2 px-4 rounded-full">Sign in</a>
                                </Link>  
                            </li>
                            <li className='mx-4 my-6'>
                                <Link href='/signup'>
                                    <a className="border-black border bg-black text-white py-2 px-4 rounded-full">Join now</a>
                                </Link>
                            </li>
                            </>
                        }
                        {user &&
                        <li className='mx-4 my-6'>
                            <Logout />
                        </li>
                        }
                        
                       
                    </ul>
                </div>
            </div>
        </nav>
        <div onClick={() => setIsOpen(!isOpen)} className={`fixed w-full h-full bg-black ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>
        </>
    )
}

export default Nav