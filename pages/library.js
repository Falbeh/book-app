import Head from 'next/head'
import Link from 'next/link'
import { auth } from '../firebase/clientApp'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router';
 
export default function Library() {
  const [user, loading] = useAuthState(auth); 
  const router = useRouter();

  if (loading) {
    return <div></div>
  }

  if (user) {
    return (
      <div className="text-white">
        <Head>
          <title>Book bank</title>
          <meta name="description" content="Save and rate the books you read" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p className="text-4xl font-bold text-center pt-20">Welcome back {user.displayName}</p>
        <h1 className="text-xl font-bold pt-20">
          Your library
        </h1>
        <p className="pt-2 mb-4">Add books that you have read to your library and give them a rating</p>
        
        <Link href="/books">
            <a className="btn-primary">Add book +</a>
        </Link>
      </div>
    )
  }
  else {
     router.push("/")
  }
}
