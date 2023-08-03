import Link from 'next/link';
import logo from '../../../public/next.svg';
import Image from 'next/image';
const Logo = () => (
  <Link href="/" className="flex items-center justify-start">
    <Image src={logo} className="h-8 w-auto" alt="Logo Filipe" />
  </Link>);

export default Logo;