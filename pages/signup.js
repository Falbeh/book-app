import { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/clientApp'
import Router from "next/router"
 

export default function SignUpScreen()  {
    
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            // If sign in is succesful redirect to frontpage
            Router.push("/library");
        } catch (error) {
            setErrorMessage(true)
        }
    };

    return (
        <div className="max-w-sm flex flex-col justify-center items-center m-auto mt-20">
            <h1 className="text-4xl font-bold text-center pt-20">Book bank sign up</h1>
            <div className="flex flex-col pt-16 w-64">
                <p>Please sign up:</p>
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

