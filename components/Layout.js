import Image from 'next/image'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
    <>
      <Nav /> 
      <div className="flex min-h-screen flex-col pt-14"> 
          <main className="px-8 max-w-7xl m-auto py-0 flex-1">
              {children}
          </main>
          <footer className="border-t border-zinc-300 py-10">
              <div className="flex items-center justify-center">
                  Powered by Falbe
                  <span className="ml-1">
                  <Image src="/falbe.png" alt="Vercel Logo" width={39} height={46} />
                  </span>
              </div>
          </footer>
      </div>
    </>
  )
}

export default Layout
