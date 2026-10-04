type TraitProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

function Trait({ icon: Icon, title, description }: TraitProps) {
  return (
    <div className='flex flex-col items-start justify-start gap-3 sm:gap-4'>
      <div className='flex-center size-12 gap-2 rounded-full border border-neutral-300 px-2.5 py-0.5 sm:size-16 xl:gap-[10.5px] xl:border-[1.31px] xl:px-[6.56px] xl:py-[2.63px]'>
        <Icon className='size-6.5 sm:size-8 xl:size-10' />
      </div>
      <div className='xl:text-display-xs text-lg font-bold text-neutral-950 sm:text-xl'>
        {title.toUpperCase()}
      </div>
      <div className='sm:text-md lg:text-md text-sm font-normal text-neutral-950 xl:tracking-[-0.03em]'>
        {description}
      </div>
    </div>
  );
}

export default Trait;
