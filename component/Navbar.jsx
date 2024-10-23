import Image from 'next/image';
import hanni from '../public/hanni.jpg';

export default function Navbar() {
  return (
    <div className='border-2 border-purple-900 flex items-center'>
      <div className='overflow-hidden rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20'>
     <Image
      className='overflow-hidden rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-12 lg:h-12'
          src={hanni}
          alt="Picture of the author"
          placeholder="blur"
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
