import hero from '@/assets/images/rinaldi.png';

function HeroImage() {
  return (
    <div className='translate-x-center absolute bottom-0 z-45 min-w-76'>
      <img src={hero} alt='hero-sized rinaldi-adrian photo' />
    </div>
  );
}

export default HeroImage;
