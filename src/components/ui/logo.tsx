import Link from 'next/link';
import { Logo as SVGLogo } from '@/assets/svgs';

const Logo = () => {
  return (
    <Link className='block' href='/'>
      <SVGLogo className='dark-hidden ~max-w-36/52' />
    </Link>
  );
};
export default Logo;