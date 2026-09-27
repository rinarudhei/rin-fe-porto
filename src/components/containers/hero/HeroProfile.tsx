import Mic from '@/assets/icons/mic.svg?react';
import content from '@/content/en/index.json';

function HeroProfile() {
  const { name, bio } = content;
  return (
    <div className='absolute top-23 flex flex-col gap-2 md:top-180 lg:top-160 lg:gap-3.5'>
      <div className='border-primary-300 flex-center size-12 gap-2 rounded-full border px-2.5 py-0.5 lg:size-15.75 lg:border-[1.31px] lg:px-[6.56px] lg:py-[2.63px]'>
        <Mic className='h-5 w-3.5 text-white lg:h-[26.25px] lg:w-[18.38px]' />
      </div>
      <div className='text-md font-bold tracking-[-2%] text-white lg:text-lg lg:tracking-normal'>
        {name}
      </div>
      <p className='w-90.25 text-sm font-medium text-white sm:w-full md:w-54 lg:w-80 lg:text-lg xl:w-102'>
        {bio}
      </p>
    </div>
  );
}

export default HeroProfile;
