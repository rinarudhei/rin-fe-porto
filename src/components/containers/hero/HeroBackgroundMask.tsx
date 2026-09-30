import background from '@/assets/images/background.avif';

function HeroBackgroundMask() {
  return (
    <div className='h-256 overflow-x-hidden border-2 border-black'>
      <img
        className='translate-x-center min-w-[1780px] shrink-0 justify-center sm:left-1/3 sm:-translate-x-1/3 lg:left-0 lg:h-full lg:w-full lg:translate-x-0 lg:object-cover lg:object-fill lg:object-center'
        src={background}
        alt='hero background image wave'
        fetchPriority='high'
      />
      <div className='pointer-events-none absolute inset-0 bg-[#A53F65]/94' />
    </div>
  );
}

export default HeroBackgroundMask;
