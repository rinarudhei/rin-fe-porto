function HeroStatus() {
  return (
    <div className='bg-primary-400 border-primary-300 flex-center translate-x-center lg:translate-x-center absolute -top-18 z-50 gap-1.5 rounded-full border px-4 py-1 sm:-top-22 md:top-4 md:translate-x-24 lg:-top-60'>
      <div className='size-2 rounded-full bg-[#e26190] sm:size-3 lg:size-4' />
      <div className='font-montserrat md:tracking-0 lg:text-md text-xs font-semibold tracking-[-0.03em] text-white sm:text-sm'>
        Available for Hire
      </div>
    </div>
  );
}

export default HeroStatus;
