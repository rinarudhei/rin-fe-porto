import './App.css';
import DescriptionSection from './components/containers/description/DescriptionSection';
import HeroSection from './components/containers/hero/HeroSection';
import Traits from './components/containers/traits/Traits';

import './index.css';

function App() {
  return (
    <div className='flex w-full flex-col'>
      <HeroSection />
      <DescriptionSection />
      <Traits />
    </div>
  );
}

export default App;
