import { clsx } from 'cn';

type SectionWrapperProps = {
  idName: string;
  sectionClass?: string;
  divClass?: string;
  children: React.ReactNode;
};

function SectionWrapper({
  idName,
  sectionClass = '',
  divClass = '',
  children,
}: SectionWrapperProps) {
  return (
    <section id={`#${idName}`} className={clsx('flex-center', sectionClass)}>
      <div
        className={clsx(
          'flex-center w-full max-w-360 flex-col',
          'gap-6 px-4 py-10 sm:gap-8 sm:px-8 sm:py-12 lg:gap-10 lg:px-16 lg:py-16 xl:gap-12 xl:px-30 xl:py-20',
          divClass
        )}
      >
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
