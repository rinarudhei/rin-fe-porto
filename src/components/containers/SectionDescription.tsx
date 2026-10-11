import { clsx } from 'cn';

type SectionDescriptionProps = {
  title: string;
  subtitle: string;
  span?: string;
  spanClass?: string;
  afterSpan?: string;
  titleContainerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
};

function SectionDescription({
  title,
  subtitle,
  span = '',
  spanClass = '',
  afterSpan = '',
  titleContainerClass = '',
  titleClass = '',
  subtitleClass = '',
}: SectionDescriptionProps) {
  return (
    <div className={clsx('flex-center flex-col gap-2', titleContainerClass)}>
      <div
        className={clsx(
          'text-display-sm lg:text-display-xl w-full text-center font-bold tracking-[-0.02em] text-neutral-950 lg:tracking-[-0.03em]',
          titleClass
        )}
      >
        {title}
        {span && <span className={spanClass}>{span}</span>}
        {span && afterSpan}
      </div>
      <div
        className={clsx(
          'lg:text-md text-center text-sm font-medium text-neutral-950 lg:tracking-[-0.03em]',
          subtitleClass
        )}
      >
        {subtitle}
      </div>
    </div>
  );
}

export default SectionDescription;
