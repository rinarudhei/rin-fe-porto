import hero from '@/assets/images/rinaldi.png';

function HeroImage() {
  return (
    <div className='absolute top-113 z-45'>
      <img src={hero} alt='hero-sized rinaldi-adrian photo' />
    </div>
  );
}

export default HeroImage;
