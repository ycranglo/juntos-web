'use client';
import React from 'react'
import { useSession } from 'next-auth/react';
import Navbar from '../../component/Navbar';

export default function Feeds() {
 const { data: session } = useSession();
 if (!session) {
		return redirect('/login');
	}

  return (
   <>
    <>
     <div className='border-2 border-red-900 w-screen h-screen flex justify-center items-center'>
      <div className='w-screen lg:w-[50%] h-screen border-2 flex flex-col'>
       <div>
        <Navbar/>
       </div>
      </div>
    </div>
    </>
    </>
  )
}