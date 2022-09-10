import Head from 'next/head'
import Link from 'next/link'

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
          <h1 className='mb-6'>Your personal library</h1>
          <p className='w-auto mb-8 lg:w-2/4'>Keep track of the books you read. Rate the books and add notes. Share your personal library with friends.</p>
          <div>
          <Link href="/signup">
            <a className="btn-primary">Get started now</a>
          </Link>
          </div>
        </div>
        <div className='flex absolute z-0 top-0 right-0 items-center justify-end h-screen-80'>
          <img className='h-full lg:h-auto z-10' src="/hero.png" alt="Hero img" />
        </div>
      </div>
    </div>
  )
}
