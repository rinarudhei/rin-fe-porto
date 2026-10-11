import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

import SectionDescription from '../SectionDescription';
import SectionWrapper from '../SectionWrapper';

function PortofolioSection() {
  const sectionDrescription = {
    title: 'Design to',
    subtitle:
      'We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all projects.',
  };
  return (
    <SectionWrapper idName='projects'>
      <div className='flex-center w-full flex-col gap-6 sm:flex-row lg:justify-between'>
        <SectionDescription
          title={sectionDrescription.title}
          subtitle={sectionDrescription.subtitle}
          span=' Code Accuracy'
          spanClass='text-primary-300'
          titleContainerClass='text-start justify-start max-w-171.5'
          titleClass='sm:text-start'
          subtitleClass='sm:text-start'
        />

        <Button
          variant='outline'
          size='default'
          className='h-14 w-full max-w-90.25 min-w-40 gap-0 sm:w-fit sm:max-w-full'
        >
          <div className='flex-start lg:text-md text-center text-sm font-semibold sm:w-full lg:w-fit'>
            See All
          </div>
          <div
            data-icon='inline-end'
            className='size-9 rounded-[100px] bg-neutral-950 p-2'
          >
            <ArrowRight className='size-5 text-white' />
          </div>
        </Button>
      </div>
    </SectionWrapper>
  );
}

export default PortofolioSection;
