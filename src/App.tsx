import ComparisonSection from './components/containers/comparison/ComparisonSection';
import DescriptionSection from './components/containers/description/DescriptionSection';
import HeroSection from './components/containers/hero/HeroSection';
import PortofolioSection from './components/containers/portofolio/PortofolioSection';
import SkillsSection from './components/containers/skills/SkillsSection';
import TraitsSection from './components/containers/traits/TraitsSection';

import './index.css';

function App() {
  return (
    <div className='flex w-full flex-col'>
      <HeroSection />
      <DescriptionSection />
      <TraitsSection />
      <SkillsSection />
      <ComparisonSection />
      <PortofolioSection />
    </div>
  );
}

export default App;
