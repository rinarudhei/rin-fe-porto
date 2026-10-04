import { clsx } from 'cn';
import React from 'react';

import { Separator } from '@/components/ui/separator';

import Trait from './Trait';

import ColorPaint from '@/assets/icons/color-paint.svg?react';
import Gear from '@/assets/icons/gear.svg?react';
import Mobile from '@/assets/icons/mobilephone.svg?react';

function TraitsSection() {
  const traits = [
    {
      id: 1,
      icon: Gear,
      title: 'Component-Based Development',
      description:
        'Reusable, scalable code built with modern frameworks like React or Vue.',
    },
    {
      id: 2,
      icon: ColorPaint,
      title: 'Pixel-Perfect UI Implementation',
      description:
        'Translating design into high-fidelity user interfaces with attention to detail.',
    },
    {
      id: 3,
      icon: Mobile,
      title: 'Responsive & Accessible Design',
      description:
        'Optimized layout that works seamlessly accross all screen sizes and devices.',
    },
  ];

  return (
    <section className='flex-center w-full'>
      <div className='flex-center w-full max-w-360 flex-col gap-4 px-4 py-10 sm:gap-6 lg:flex-row lg:justify-between lg:gap-10 lg:px-10 lg:py-4 xl:px-30 xl:py-20'>
        {traits.map((t) => (
          <React.Fragment key={t.id}>
            <Trait
              title={t.title}
              description={t.description}
              icon={t.icon as React.FC<React.SVGProps<SVGSVGElement>>}
            />
            <Separator
              orientation='horizontal'
              className='h-px w-full max-w-125.25 bg-neutral-300 sm:max-w-145 lg:hidden'
            />
            <Separator
              orientation='vertical'
              className={clsx(
                'hidden h-47.5 w-px bg-neutral-300',
                t.id !== 3 && 'lg:block'
              )}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default TraitsSection;
