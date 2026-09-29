import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import Metric from './Metric';

import CoffeBean from '@/assets/icons/coffeebean.svg?react';

function HeroStats() {
  const content = {
    year: {
      label: 'Years Experience',
      value: '5+',
    },
    satisfaction: {
      label: 'Team Satisfaction',
      value: '99%',
    },

    project: {
      label: 'Project Delivered',
      value: '5',
    },

    coffee: {
      label: 'Coffee Consumed',
      value: '1.247',
    },
  };
  return (
    <div className='absolute top-68.75 flex w-full flex-col gap-5 lg:top-54.25 lg:right-0 lg:w-34 xl:w-55.5'>
      <div className='sm:gap-x-lg flex flex-wrap gap-x-[60.17px] gap-y-5 sm:justify-between'>
        {/* Metric year */}
        {/* 2 Vertical separators shown in small screen */}
        {/* 3 Vertical separators shown in sm screen */}
        {/* 3 Horizontal separators shown in md screen */}
        <Metric value={content.year.value} label={content.year.label} />
        <Separator
          orientation='vertical'
          className='bg-primary-300 w-px lg:hidden'
        />
        <Separator
          orientation='horizontal'
          className='bg-primary-300 hidden w-px lg:block lg:h-px lg:w-full'
        />

        {/* Metric satisfaction */}
        <Metric
          value={content.satisfaction.value}
          label={content.satisfaction.label}
        />
        <Separator
          orientation='vertical'
          className='bg-primary-300 hidden w-px sm:block lg:hidden'
        />
        <Separator
          orientation='horizontal'
          className='bg-primary-300 hidden w-px lg:block lg:h-px lg:w-full'
        />

        {/* Metric projects */}
        <Metric value={content.project.value} label={content.project.label} />
        <Separator
          orientation='vertical'
          className='bg-primary-300 w-px lg:hidden'
        />
        <Separator
          orientation='horizontal'
          className='bg-primary-300 hidden w-px lg:block lg:h-px lg:w-full'
        />

        {/* Metric coffee */}
        <Metric
          value={content.coffee.value}
          label={content.coffee.label}
          valueIcon={CoffeBean}
        />
      </div>
      <Button variant='secondary' size='default' className='min-w-40 gap-0'>
        <div className='flex-center lg:flex-start lg:text-md text-center text-sm font-semibold sm:w-full lg:w-fit'>
          Contact Me
        </div>
        <div
          data-icon='inline-end'
          className='size-9 rounded-[100px] bg-neutral-950 p-2'
        >
          <ArrowRight className='size-5 text-white' />
        </div>
      </Button>
    </div>
  );
}

export default HeroStats;
