'use client'
import DashBoard from "../component/DashBoard.jsx";
import Image from "next/image";
import { useSession } from 'next-auth/react'
import Feeds from "./feeds/page.jsx";
import Login from "./login/page.jsx";
export default function Home() {
  const {data:session} = useSession()
  return (
    <div className="">
      {session ?
      <Feeds/> : <Login/>
    }
    </div>
  );
}
