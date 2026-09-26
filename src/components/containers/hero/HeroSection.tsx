import HeroBackgroundMask from './HeroBackgroundMask';
import HeroDevMask from './HeroDevMask';
import HeroImage from './HeroImage';
import HeroTitle from './HeroTitle';

function HeroSection() {
  return (
    <div className='relative min-h-256 bg-[#A53F65]'>
      <HeroTitle />
      <HeroBackgroundMask />
      <HeroDevMask />
      <HeroImage />
    </div>
  );
}

export default HeroSection;
