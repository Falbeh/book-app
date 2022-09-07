import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="border-t border-zinc-300 py-10">
        <div className="flex items-center justify-center">
            Powered by Falbe
            <span className="ml-1">
            <Image src="/falbe.png" alt="Vercel Logo" width={39} height={46} />
            </span>
        </div>
    </footer>
  )
}

export default Footer

