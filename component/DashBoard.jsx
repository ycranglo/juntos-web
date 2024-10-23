'use client'

import React from 'react'
import { signIn, useSession } from 'next-auth/react'
const DashBoard = () => {

 const {data: session} = useSession()
  return (
   <div>
     {session ? (
     <>
      <h1>Welcome back!</h1>
      <h1 className="">{ JSON.stringify(session)}</h1>
     </>
      ) : (
      <>
        <h1 className="text-3xl text-red-500 font-bold">You're not logged in!</h1>
      <button onClick={()=> signIn("google")} className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
        sign in
      </button>
      </>
      )}
    </div>
  )
}

export default DashBoard