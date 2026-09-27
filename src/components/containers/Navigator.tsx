import Menu from '@/assets/icons/menu.svg?react';

function Navigator() {
  const menus = [
    { id: 1, label: 'Home', href: '' },
    { id: 2, label: 'About', href: '' },
    { id: 3, label: 'Skills', href: '' },
    { id: 4, label: 'Projects', href: '' },
    { id: 5, label: 'FAQ', href: '' },
    { id: 6, label: 'Contact', href: '' },
  ];
  return (
    <nav className='md:px-20 lg:px-52 xl:px-81'>
      <ul className='z-50 flex h-12 w-90.25 items-center justify-between rounded-full bg-black/20 px-4 shadow-md sm:w-full sm:gap-6 sm:px-6'>
        {/* Mobile screen menu */}
        <li className='sm:hidden'>
          <div className='text-xl font-bold text-white'>Rinaldi</div>
        </li>
        <li className='sm:hidden'>
          <Menu className='size-6 stroke-2 text-white' />
        </li>

        {/* Large screen menu */}
        {menus.map((m) => (
          <li
            key={m.id}
            className='hidden p-2 text-base font-medium tracking-[-0.03em] text-white sm:block'
          >
            {m.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigator;
