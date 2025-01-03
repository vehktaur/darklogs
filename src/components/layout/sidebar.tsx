import { assets } from '@/assets/assets';
import { HiOutlinePlusCircle, HiListBullet } from 'react-icons/hi2';
import { PiUser } from 'react-icons/pi';
import Link from 'next/link';
import NavLink from '../ui/nav-link';
import BlurImage from '../ui/blur-image';
import { User } from '@/lib/models/users';
import { Logo, LogoIcon } from '@/assets/svgs';

const Sidebar = async ({ user }: { user?: User | null }) => {
  const navLinks = [
    {
      name: 'Profile',
      icon: <PiUser className='size-7' />,
      path: `/${user?.username}`,
    },
    {
      name: 'Create Post',
      icon: <HiOutlinePlusCircle className='size-7' />,
      path: '/create-post',
    },
    {
      name: 'Blogs List',
      icon: <HiListBullet className='size-7' />,
      path: '/blogs',
    },
  ];

  return (
    <aside className='full-screen sticky left-0 top-0 w-16 border-r border-black bg-stone-50 sm:~w-40/80'>
      <div className='flex h-full flex-col'>
        {/* Sidebar header */}
        <div className='h-[3.75rem] border-b border-black sm:py-3'>
          <div className='h-full w-full content-center sm:px-8 md:px-12'>
            <Link className='mx-auto block w-full sm:w-auto' href='/'>
              <p className='sr-only'>Go to home page</p>
              {/* Desktop logo */}
              <Logo className='dark-hidden hidden h-auto w-full ~xxs/lg:~max-w-32/40 sm:block' />

              {/* Mobile logo */}
              <div className='mx-auto size-10 rounded-lg border border-stone-200 px-1 sm:hidden'>
                <LogoIcon className='size-full object-contain sm:hidden' />
              </div>
            </Link>
          </div>
        </div>

        {/* Main Sidebar Links */}
        <ul className='space-y-3 ~py-5/8'>
          {navLinks.map(({ name, icon, path }) => (
            <li key={name}>
              <NavLink
                activeClassName='bg-stone-200'
                className='block px-1 py-1.5 transition-all duration-500 hover:bg-stone-200 sm:px-8 md:px-12'
                href={path}
              >
                <div className='flex items-center justify-center gap-2 py-2 font-medium sm:justify-start'>
                  {icon}
                  <span className='hidden ~text-sm/base sm:block'>{name}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Sidebar footer */}
        <div className='mt-auto px-1'>
          <hr className='mx-auto block max-w-[90%] rounded-full border border-stone-900 sm:border-[1.5px]' />
          <div className='flex items-center px-1 py-3 ~gap-1/4 sm:~px-2/5'>
            <div className='mx-auto flex-shrink-0 overflow-hidden rounded-full border ~size-10/12 sm:mx-0'>
              <BlurImage
                className='size-full object-cover'
                src={user?.image || assets.profile_img}
                alt='Profile Image'
                width={1280}
                height={720}
              />
            </div>
            <div className='hidden sm:grid'>
              <span className='truncate font-medium ~text-sm/base'>
                {user?.name}
              </span>
              <span className='truncate text-[#666] ~text-xs/sm'>
                {user?.email}
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
