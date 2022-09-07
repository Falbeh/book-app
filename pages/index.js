import Head from 'next/head'
import Link from 'next/link'
import BookList from '../components/BookList'

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

      <h1 className="text-6xl font-bold text-center pt-20">
        My library
      </h1>
      <p className="text-center pt-2">Add books that you have read to your library and give them a rating</p>
      
        <Link href="/books">
            Add book +
        </Link>
        <BookList books={books}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const books = await res.json()

  return {
    props:  {
      books
    }
  }
}
