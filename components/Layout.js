import Nav from './Nav'
import AppNav from './AppNav'
import Footer from './Footer'
import { auth } from '../firebase/clientApp'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'

const Layout = ({children}) => {
  const [user, loading] = useAuthState(auth); 
  const router = useRouter();

  if (loading) {
    return <div></div>
  }

  if (user) {
    console.log(user)
    return (
      <>
        
        <div className={`flex min-h-screen justify-between flex-row ${user ? "bg-app-dark" : ""}`}>
          <AppNav /> 
          <main className='overflow-hidden w-full'>
              {children}
          </main>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <div className={`flex min-h-screen justify-between flex-col ${user ? "bg-app-dark" : ""}`}>
            <Nav />
            <main className='overflow-hidden'>
                {children}
            </main>
        <Footer />
        </div>
      </>
    )
  }
  
}

export default Layout
