import firebase from "../firebase/clientApp"
import React, { useState } from 'react'


export default function SignInScreen() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  login = async () => {
        
  }
  
  return (
    <div className="max-w-sm flex flex-col justify-center items-center m-auto mt-20">
        <h1 className="text-4xl font-bold text-center pt-20">Book bank login</h1>
        <div className="flex flex-col pt-20">
            <p>Please sign in:</p>
            <input className="mt-2 border border-zinc-400 p-2 rounded-lg" placeholder="Email..." onChange={(event) => {setLoginEmail(event.target.value)}} />
            <input className="mt-2 border border-zinc-400 p-2 rounded-lg" placeholder="Password..." onChange={(event) => {setLoginPassword(event.target.value)}}/>
            <button className="transition mt-2 hover:brightness-110 bg-lime-500 text-white p-2 rounded-full">Sign in</button>
        </div>
    </div> 
  )
}

