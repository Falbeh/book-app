import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/clientApp'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'


export default function SignInScreen() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [user, loading] = useAuthState(auth); 
  const router = useRouter();

  const login = async () => {
    try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      } catch (error) {
        setErrorMessage(true)
      }
  }

  if (loading) {
    return <div></div>
  }
  if (user) {
    router.push("/library")
  }
  else {
    return (
      <div className="max-w-sm flex flex-col justify-center items-center m-auto">
          <h1 className="text-4xl font-bold text-center">Book bank login</h1>
          <div className="flex flex-col pt-16 w-64">
              <p>Please sign in:</p>
              <input className="mt-2 border border-zinc-400 p-2 rounded-lg" placeholder="* Email..." onChange={(event) => {setLoginEmail(event.target.value)}} />
              <input type="password" className="mt-2 border border-zinc-400 p-2 rounded-lg" placeholder="* Password..." onChange={(event) => {setLoginPassword(event.target.value)}}/>
              <button onClick={login} className="btn-primary">Sign in</button>
              {errorMessage === true &&
                  <p className="w-64 mt-2 text-red-500">Login failed. Please try with another email or try again later.</p>
              }
          </div>
      </div> 
    )
  }
}

