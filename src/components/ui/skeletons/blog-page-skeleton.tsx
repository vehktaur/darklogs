import { Skeleton } from '../skeleton';

const BlogPageSkeleton = () => {
  return (
    <>
      <div className='bg-gray-200 pt-20'>
        <div className='px-5 pb-5 ~pt-8/16 sm:~px-8/20'>
          <div className='mx-auto max-w-[48rem] ~mb-36/40'>
            <Skeleton className='rounded-full ~h-8/12 mx-8' />
            <Skeleton className='mb-6 mt-2 rounded-full w-1/2 mx-auto ~h-8/12' />

            <Skeleton className='mx-auto rounded-full ~size-16/20' />
            <Skeleton className='mx-auto mt-2 h-3.5 w-20 rounded-full' />
          </div>
        </div>
      </div>
      <div className='px-5 sm:~px-8/20'>
        <div className='mx-auto max-w-[50rem]'>
          <Skeleton className='mx-auto -mt-[6.25rem] mb-10 w-full border-4 border-white ~h-56/[30rem]' />

          <div className='~mb-4/6 max-w-[65ch] space-y-2'>
            <Skeleton className='h-3'/>
            <Skeleton className='h-3'/>
            <Skeleton className='h-3'/>
            <Skeleton className='h-3'/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPageSkeleton;
