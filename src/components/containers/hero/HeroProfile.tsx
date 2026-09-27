import Mic from '@/assets/icons/mic.svg?react';
import content from '@/content/en/index.json';

function HeroProfile() {
  const { name, bio } = content;
  return (
    <div className='absolute top-23 flex flex-col gap-2'>
      <div className='border-primary-300 flex-center size-12 gap-2 rounded-full border px-2.5 py-0.5'>
        <Mic className='h-5 w-3.5 text-white' />
      </div>
      <div className='text-md font-bold tracking-[-2%] text-white'>{name}</div>
      <p className='w-90.25 text-sm font-medium text-white'>{bio}</p>
    </div>
  );
}

export default HeroProfile;
