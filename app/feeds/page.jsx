'use client';
import React from 'react'
import { useSession } from 'next-auth/react';
import Navbar from '../../component/Navbar';
import { redirect } from 'next/navigation'; 

export default function Feeds() {
 const { data: session } = useSession();
 if (!session) {
		return redirect('/login');
	}

  return (
   <div className="w-screen  h-screen flex justify-center items-center">
    <div className="w-screen lg:w-[60%] h-screen flex flex-col">
          <Navbar />
     {/* Add more content here if needed */}
    </div>
   </div>
  )
}
