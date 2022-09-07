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
      {!user &&  <Nav /> }
      {user &&  <AppNav /> }
      <div className={`flex min-h-screen flex-col pt-20 ${user ? "bg-app-dark" : ""}`}>
          <main className="px-8 max-w-7xl m-auto py-0 flex-1">
              {children}
          </main>
      {!user &&  <Footer /> }
      </div>
    </>
  )
}

export default Layout
