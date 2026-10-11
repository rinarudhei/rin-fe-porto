import { clsx } from 'cn';
import { Check, X } from 'lucide-react';

import Anonymous from '@/assets/icons/profile.svg?react';
import Profile from '@/assets/images/rinaldi-small.png';

type ComparisonCardProps = {
  isPrimary: boolean;
  title: string;
  whats: string[];
};

function ComparisonCard({ isPrimary, title, whats }: ComparisonCardProps) {
  return (
    <div
      className={clsx(
        'flex-center w-full max-w-90.25 flex-col gap-6 rounded-2xl px-4 py-8 sm:max-w-147 lg:basis-1/2 lg:gap-8 lg:p-8',
        isPrimary ? 'bg-secondary-100' : 'border border-neutral-300 bg-white'
      )}
    >
      {/* Standout card header */}
      <div className='flex-center flex-col gap-3'>
        <div className='text-center text-lg font-bold text-neutral-950'>
          {title}
        </div>
        <div
          className={clsx(
            'size-20 overflow-clip rounded-full lg:size-25',
            isPrimary ? 'bg-primary-300 relative' : 'flex-center bg-neutral-300'
          )}
        >
          {isPrimary ? (
            <img
              src={Profile}
              alt='Rinaldi profile picture'
              className='absolute bottom-0 left-3 size-16 lg:left-4 lg:size-20'
            />
          ) : (
            <Anonymous
              className={clsx('size-[45.4px] text-white lg:size-15')}
            />
          )}
        </div>
      </div>

      {/* Standout List */}
      <ul className='flex-center flex-col gap-3 lg:gap-6'>
        {whats.map((w) => (
          <li
            key={w}
            className='text-md tracking-0 flex-center md:text-md w-max gap-1 text-center font-semibold text-nowrap text-neutral-950 sm:text-sm lg:text-lg lg:tracking-[-0.03em]'
          >
            {isPrimary ? (
              <Check className='size-6 text-neutral-950' />
            ) : (
              <X className='size-6 text-[#e5352d]' />
            )}{' '}
            {w}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComparisonCard;
