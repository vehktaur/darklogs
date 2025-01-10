'use client';

import { usePathname, useRouter } from 'next/navigation';

const BlogNotFound = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[2].split('__').pop();
  const router = useRouter();

  return (
    <div className='grid min-h-[70vh] w-full place-items-center'>
      <div className='mt-20 text-center'>
        <p>Could not find required resource</p>

        <p className='mt-4'>blog id: {id}</p>

        <button
          onClick={() => router.back()}
          className='mt-10 rounded-full border border-neutral-500 px-4 py-2 font-semibold transition-colors hover:bg-neutral-100'
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
export default BlogNotFound;
