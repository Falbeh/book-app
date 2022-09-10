import Nav from './Nav'
import AppNav from './AppNav'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase/clientApp'

const Layout = ({children}) => {
  const [user, setUser] = useState({});
    
  useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
      })
  },[])

  return (
    <>
      {/* OBS */}
      {user &&  <AppNav /> }
      <div className={`flex min-h-screen justify-between flex-col ${user ? "bg-app-dark" : ""}`}>
          {!user &&  <Nav /> }
          <main className='overflow-hidden'>
              {children}
          </main>
      {!user &&  <Footer /> }
      </div>
    </>
  )
}

export default Layout
