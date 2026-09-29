import Navigator from '../Navigator';
import HeroBackgroundMask from './HeroBackgroundMask';
import HeroDevMask from './HeroDevMask';
import HeroImage from './HeroImage';
import HeroProfile from './HeroProfile';
import HeroSkills from './HeroSkills';
import HeroStats from './HeroStats';
import HeroTitle from './HeroTitle';

function HeroSection() {
  return (
    <div className='relative min-h-256 bg-[#A53F65]'>
      <HeroBackgroundMask />
      <HeroTitle />
      <HeroDevMask />
      <HeroImage />

      <div className='translate-x-center absolute top-5 z-50 flex max-w-300 flex-col justify-center'>
        <Navigator />
        <HeroProfile />
        <HeroStats />
        <HeroSkills />
      </div>
    </div>
  );
}

export default HeroSection;
