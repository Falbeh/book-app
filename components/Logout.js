import { signOut } from "firebase/auth"
import { auth } from '../firebase/clientApp'
import Link from 'next/link'

const Logout = () => {
	const logout = async () => {
		await signOut(auth)
	}
  return (
    <Link href='/'>
      <a onClick={logout} className="py-2 rounded-full">Logout</a>
    </Link>
  )
}

export default Logout