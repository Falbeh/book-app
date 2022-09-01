import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Book bank</title>
        <meta name="description" content="Save and rate the books you read" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigi />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>

      <h1 className="text-6xl font-bold text-center pt-20">
        My library
      </h1>
      <p className="text-center pt-2">Add books that you have read to your library and give them a rating</p>
      
        <Link href="/books">
            Add book +
        </Link>
      
    </div>
  )
}
