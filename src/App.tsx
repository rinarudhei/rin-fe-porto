import './App.css';
import DescriptionSection from './components/containers/description/DescriptionSection';
import HeroSection from './components/containers/hero/HeroSection';
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
    </div>
  );
}

export default App;
