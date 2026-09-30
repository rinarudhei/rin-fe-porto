import HeroStatus from './HeroStatus';

import hero from '@/assets/images/rinaldi.avif';

function HeroImage() {
  return (
    <div className='translate-x-center absolute bottom-0 z-45 flex w-full max-w-100 justify-center overflow-x-clip sm:max-w-120 md:max-w-144 lg:max-w-full'>
      <img
        src={hero}
        alt='hero-sized rinaldi-adrian photo'
        className='min-w-100'
        fetchPriority='high'
      />
      <HeroStatus />
    </div>
  );
}

export default HeroImage;
