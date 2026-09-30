import Shuriken from '@/assets/icons/shuriken.svg?react';

function HeroTitle() {
  return (
    <div className='font-anton text-secondary-100 translate-x-center absolute top-164 z-40 w-fit text-center sm:top-148 lg:top-64.75'>
      <div className='sm:text-frontend z-20 text-[102px] tracking-[-2%]'>
        FRONTEND
      </div>
      <div className='sm:text-developer z-20 text-[92px] tracking-[-2%]'>
        DEVELOPER
      </div>
      <Shuriken className='absolute top-18 -left-11 -z-10 size-[clamp(5.6875rem,calc(19.53125vw-2.125rem),10.375rem)] rotate-18 sm:top-14 sm:-left-16 sm:rotate-9 md:-left-20 lg:top-28 lg:-left-22 lg:rotate-0' />
      <Shuriken className='absolute top-68 -right-4 -z-10 size-[clamp(5.6875rem,calc(19.53125vw-2.125rem),10.375rem)] rotate-0' />
    </div>
  );
}

export default HeroTitle;
