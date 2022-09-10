import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/clientApp'

export default function Library() {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
  },[])

  return (
    <div className="text-white">
      <Head>
        <title>Book bank</title>
        <meta name="description" content="Save and rate the books you read" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-4xl font-bold text-center pt-20">Welcome back {user?.email}</p>
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
