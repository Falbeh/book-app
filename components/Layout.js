import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      {/* OBS */}
      <Nav /> 
      <div className="flex min-h-screen flex-col pt-20"> 
          <main className="px-8 max-w-7xl m-auto py-0 flex-1">
              {children}
          </main>
      <Footer />
      </div>
    </>
  )
}

export default Layout
