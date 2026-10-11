type SectionDescriptionProps = {
  title: string;
  subtitle: string;
};

function SectionDescription({ title, subtitle }: SectionDescriptionProps) {
  return (
    <div className='flex-center flex-col gap-2'>
      <div className='text-display-sm lg:text-display-xl text-center font-bold tracking-[-0.02em] text-neutral-950 lg:tracking-[-0.03em]'>
        {title}
      </div>
      <div className='lg:text-md text-center text-sm font-medium text-neutral-950 lg:tracking-[-0.03em]'>
        {subtitle}
      </div>
    </div>
  );
}

export default SectionDescription;
