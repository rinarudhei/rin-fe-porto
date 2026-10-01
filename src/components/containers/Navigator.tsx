import { clsx } from 'cn';
import React from 'react';

import MobileMenus from './MobileMenus';

import { menus } from '@/lib/constants';

function Navigator() {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  return (
    <nav className={clsx('lg:px-52 xl:px-81', isMenuOpened && 'invisible')}>
      {/* Mobile screen menu */}
      <div className='z-50 flex h-12 w-90.25 items-center justify-between rounded-full bg-black/20 px-4 shadow-md sm:hidden'>
        <div className='text-xl font-bold text-white sm:hidden'>Rinaldi</div>
        <MobileMenus setIsMenuOpened={setIsMenuOpened} />
      </div>

      {/* Large screen menu */}
      <ul className='z-50 hidden h-12 w-90.25 items-center justify-between rounded-full bg-black/20 px-4 shadow-md sm:flex sm:w-full sm:gap-6 sm:px-6'>
        {menus.map((m) => (
          <li
            key={m.id}
            className='text-md hidden p-2 font-medium tracking-[-0.03em] text-white sm:block'
          >
            {m.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigator;
