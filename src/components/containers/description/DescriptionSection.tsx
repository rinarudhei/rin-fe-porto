import SectionWrapper from '../SectionWrapper';

import Creativity from '@/assets/icons/creativity.svg?react';
import TapSetting from '@/assets/icons/tap-settings.svg?react';

function DescriptionSection() {
  return (
    <SectionWrapper
      idName='about'
      sectionClass=' gap-2 px-3.75 py-10 sm:px-4 lg:px-30 lg:py-20'
      divClass=''
    >
      <p className='text-display-sm lg:text-display-lg max-w-223 text-center font-medium tracking-[-0.03em] text-neutral-950 lg:tracking-[-0.02em]'>
        As frontend developers, we bring designs to life with{' '}
        <span className='text-primary-300'>clean</span>,{' '}
        <span className='text-primary-300'>responsive code </span>
        that blends creativity
        <span className='inline-flex'>
          <Creativity className='size-8' />
        </span>
        with usability{' '}
        <span className='inline-flex align-middle'>
          <TapSetting className='size-8' />
        </span>{' '}
        .
      </p>
    </SectionWrapper>
  );
}

export default DescriptionSection;
