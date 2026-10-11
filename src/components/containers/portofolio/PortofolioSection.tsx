import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

import SectionDescription from '../SectionDescription';
import SectionWrapper from '../SectionWrapper';
import ProjectCard from './ProjectCard';

import AdTune from '@/assets/images/portofolio-adtune.png';
import Booky from '@/assets/images/portofolio-booky.png';
import Sociality from '@/assets/images/portofolio-sociality.png';

function PortofolioSection() {
  const sectionDrescription = {
    title: 'Design to',
    subtitle:
      'We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all projects.',
  };

  const projects = [
    {
      id: 1,
      title: 'AdTune - Creative Asset Manager',
      description:
        'Eliminate productivity bottlenecks in modern marketing teams. Used accross European companies.',
      image: AdTune,
      alt: 'AdTune asset library sample',
    },
    {
      id: 2,
      title: 'Sociality - Instagram Clone',
      description:
        'Built to understaand what it takes to engineer a social media system like feeds, follow, and media upload',
      image: Sociality,
      alt: 'Sociality profile screen sample',
    },
    {
      id: 3,
      title: 'Booky - Reading Companion',
      description:
        'A book discovery and reading platform designed to help users find and explore books across every genre',
      image: Booky,
      alt: 'Booky home page sample',
    },
  ];

  return (
    <SectionWrapper idName='projects'>
      {/* Project Section Header */}
      <div className='flex-center w-full flex-col gap-6 lg:flex-row lg:justify-between'>
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
          className='h-14 w-full max-w-90.25 min-w-40 gap-0 md:max-w-120 lg:w-fit'
        >
          <div className='flex-start lg:text-md text-center text-sm font-semibold sm:w-fit'>
            See All
          </div>
          <div
            data-icon='inline-end'
            className='size-9 rounded-full bg-neutral-950 p-2'
          >
            <ArrowRight className='size-5 text-white' />
          </div>
        </Button>
      </div>

      {/* Project List */}
      <div className='flex-center w-full flex-col gap-5 lg:flex-row xl:justify-between'>
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            image={p.image}
            alt={p.alt}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default PortofolioSection;
