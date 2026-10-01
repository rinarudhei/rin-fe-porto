import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

import Menu from '@/assets/icons/menu.svg?react';
import { menus } from '@/lib/constants';

type MobileMenusProps = {
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileMenus({ setIsMenuOpened }: MobileMenusProps) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant='ghost'
            className='m-0 h-fit p-0'
            onClick={() => setIsMenuOpened((prev) => !prev)}
          >
            <Menu className='size-6 stroke-2 text-white sm:hidden' />
          </Button>
        }
      />
      <DialogContent
        className='h-[95%] w-[92%]'
        setIsMenuOpened={setIsMenuOpened}
      >
        <DialogHeader className='h-fit'>
          <DialogTitle>Rinaldi's Portofolio</DialogTitle>
        </DialogHeader>
        <ul className='text-md flex flex-col justify-start font-medium tracking-[-0.03em] text-white'>
          {menus.map((m) => (
            <li key={m.id} className='py-2'>
              {m.label}
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}

export default MobileMenus;
