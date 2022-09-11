import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase/clientApp'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
 

export default function SignUpScreen()  {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const [user, loading] = useAuthState(auth); 
    const router = useRouter();

    const register = async () => {
        try {
          await createUserWithEmailAndPassword(auth, registerEmail, registerPassword).catch((err) =>
            console.log(err),
            setErrorMessage(true)
          );
        /*  await sendEmailVerification(auth.currentUser).catch((err) =>
            console.log(err)
          ); */
          await updateProfile(auth.currentUser, { displayName: document.getElementById("name").value }).catch(
            (err) => console.log(err)
          );
        } catch (err) {
          console.log(err);
        }
    };


    if (loading) {
        return <div></div>
      }
      if (user) {
        router.push("/library")
      }
      else {
        return (
            
            <div className="max-w-sm flex flex-col justify-center items-center m-auto">
                <h1 className="text-4xl font-bold text-center">Book bank sign up</h1>
                <div className="flex flex-col pt-16 w-64">
                    <p>Please sign up:</p>
                    <input id="name" className="mt-2 border border-zinc-400 p-2 rounded-lg" placeholder="* Username..." />
                    <input className="mt-2 border border-zinc-400 p-2 rounded-lg" placeholder="* Email..." onChange={(event) => {setRegisterEmail(event.target.value)}} />
                    <input type="password" className="mt-2 border border-zinc-400 p-2 rounded-lg" placeholder="* Password..." onChange={(event) => {setRegisterPassword(event.target.value)}} />
                    <button className="btn-primary" onClick={register}>Create user</button>    
                </div>
                {errorMessage === true &&
                    <p className="w-64 mt-2 text-red-500">Sign up failed. Please try with another email or try again later.</p>
                }
            </div>  
        )
      }
    
}

