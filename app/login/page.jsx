import LoginBtn from '@/component/LoginBtn'
import Image from 'next/image'
import stud from '../../public/ping.jpg'

export default function Login ()  {
  return (
     <>
    <div className="w-screen h-screen  flex justify-center  ">
      <div className="pl-11 items-center  rounded-md hidden lg:flex">
    <Image
        src={stud}
        width={1000}
        height={500}
        className='rounded-md'
        alt="Picture of the author"
    />
</div>
        <div className="pl-0 lg:pl-[10rem] flex flex-col justify-center items-center">
    <div className="flex flex-col items-center text-center">
        <h1 className="font-mono font-bold text-8xl">Juntos</h1>
        <h2 className="text-1xl">Where Every Connection Matters.</h2>
    </div>
    <div className="flex justify-center pt-10">
        <LoginBtn />
    </div>
</div>

    </div>
    </>
  )
}
