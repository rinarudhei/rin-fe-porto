import { clsx } from 'cn';
import React from 'react';

type SkillCardProps = {
  isOdd: boolean;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  skill: string;
  description: string;
};

function SkillCard({ isOdd, icon: Icon, skill, description }: SkillCardProps) {
  return (
    <div
      className={clsx(
        'flex-center w-fit flex-col gap-3 rounded-[100px] px-4 py-10',
        isOdd
          ? 'bg-secondary-100 border-0'
          : 'bg-neutral-25 outline outline-neutral-300'
      )}
    >
      <div className='flex-center size-15 gap-2.5 rounded-full bg-neutral-100 p-2.5'>
        <Icon className='size-8.75' />
      </div>
      <div className='flex-center h-32.25 flex-col'>
        <div className='text-md text-center font-semibold text-neutral-950'>
          {skill}
        </div>
        <div className='w-[140.5px] text-center text-sm font-normal text-neutral-800'>
          {description}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
