import Head from 'next/head'
import Link from 'next/link'

export default function Home({books}) {
  return (
    <div>
      <Head> 
        <title>Book bank</title>
        <meta name="description" content="Save and rate the books you read" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigi />
      </Head>
    </div>
  )
}
