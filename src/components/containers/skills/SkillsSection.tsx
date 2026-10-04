import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import SkillCard from './SkillCard';

import Elm from '@/assets/icons/elm.svg?react';
import Go from '@/assets/icons/go.svg?react';
import MotionUi from '@/assets/icons/motion.svg?react';
import NodeJs from '@/assets/icons/node.svg?react';
import ReactJs from '@/assets/icons/react.svg?react';
import ShadcnUi from '@/assets/icons/shadcnui.svg?react';
import Tailwind from '@/assets/icons/tailwindcss.svg?react';
import Vite from '@/assets/icons/vite.svg?react';

function SkillsSection() {
  const skills = [
    {
      id: 1,
      skill: 'TailwindCSS',
      description: 'Consistent responsive UIs, no custom CSS.',
      icon: Tailwind,
    },
    {
      id: 2,
      skill: 'React',
      description: 'Reusable, stateful UIs built with hooks.',
      icon: ReactJs,
    },
    {
      id: 3,
      skill: 'Vite',
      description: 'Near-instant builds and hot module reloading.',
      icon: Vite,
    },
    {
      id: 4,
      skill: 'ShadcnUI',
      description: 'Accessible, customizable component library.',
      icon: ShadcnUi,
    },
    {
      id: 5,
      skill: 'Motion',
      description: 'Purposeful animations that bring UIs to life.',
      icon: MotionUi,
    },
    {
      id: 6,
      skill: 'NodeJS',
      description: 'APIs, tooling, and server-side logic.',
      icon: NodeJs,
    },
    {
      id: 7,
      skill: 'Go',
      description: 'Fast backend services and reliable CLI tools.',
      icon: Go,
    },
    {
      id: 8,
      skill: 'Elm',
      description: 'TEA architecture for calm, reliable UIs.',
      icon: Elm,
    },
  ];

  return (
    <section className='flex-center bg-linear-to-t from-[#9e385e]/20 to-[#9e385e]/0'>
      <div className='flex-center flex-col gap-6 px-4 py-10 sm:gap-8 sm:px-16 sm:py-12 lg:gap-10 lg:px-24 lg:py-16 xl:gap-12 xl:px-30 xl:py-20'>
        {/* Skills Section Description */}
        <div className='flex-center flex-col gap-2'>
          <div className='text-display-sm lg:text-display-xl text-center font-bold tracking-[-0.02em] text-neutral-950 lg:tracking-[-0.03em]'>
            Code, Design, and Everything in Between
          </div>
          <div className='lg:text-md text-center text-sm font-medium text-neutral-950 lg:tracking-[-0.03em]'>
            These are the technologies that power my workflow and bring ideas to
            life.
          </div>
        </div>

        {/* Skills Carousel */}
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full max-w-90.5 sm:max-w-140 lg:max-w-230'
        >
          <CarouselContent className='gap-4 py-px'>
            {skills.map(({ id, skill, description, icon }) => (
              <CarouselItem
                key={id}
                className='basis-1/2 sm:basis-1/3 lg:basis-1/4'
              >
                <SkillCard
                  isOdd={id % 2 !== 0}
                  skill={skill}
                  description={description}
                  icon={icon}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='flex-center h-19.25 items-end gap-3'>
            <CarouselPrevious className='flex-center h-fit gap-2.75 rounded-full border border-neutral-300 p-2.75' />
            <CarouselNext className='flex-center h-fit gap-2.75 rounded-full border border-neutral-300 p-2.75' />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default SkillsSection;
