import { clsx } from 'cn';

type SectionWrapperProps = {
  idName: string;
  sectionClass: string;
  divClass: string;
  children: React.ReactNode;
};

function SectionWrapper({
  idName,
  sectionClass,
  divClass,
  children,
}: SectionWrapperProps) {
  return (
    <section id={`#${idName}`} className={clsx('flex-center', sectionClass)}>
      <div className={clsx('flex-center max-w-360 flex-col', divClass)}>
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
