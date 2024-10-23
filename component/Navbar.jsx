import Image from 'next/image';
import hanni from '../public/hanni.jpg';

export default function Navbar() {
  return (
    <div className="flex lg:pt-8 border justify-between w-full"> {/* Ensured full width */}
      <div className=""> {/* Added padding */}
        <Image
          src={hanni}
          alt="Picture of the author"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className=""> {/* Added padding */}
        <Image
          src={hanni}
          alt="Picture of the author"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
