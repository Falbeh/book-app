import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head> 
        <title>Book bank</title>
        <meta name="description" content="Save and rate the books you read" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='relative z-0'>
        <div className='page-contained relative flex flex-col justify-center h-screen-80 z-10'>
          <h1>Your personal library</h1>
          <p>Keep track of the books you read. Rate the books and add notes. Share your personal library with friends.</p>
        </div>
        <div className='hidden md:flex absolute z-0 top-0 right-0 items-center justify-end h-screen-80 max-w-'>
          <img className='z-10' src="/hero.png" alt="Hero img" />
        </div>
      </div>
    </div>
  )
}
