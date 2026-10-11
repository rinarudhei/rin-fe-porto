import SectionDescription from '../SectionDescription';
import SectionWrapper from '../SectionWrapper';
import ComparisonCard from './ComparisonCard';

function ComparisonSection() {
  const sectionDescription = {
    title: 'More Than Just Code',
    subtitle:
      'We care about design, performance, and user experience all in one',
  };

  const standouts = {
    withMe: {
      title: 'With Me',
      whats: [
        'Precise Website Implementation',
        'Highly Value Ownership',
        'Clean Maintainable Code',
        'Responsive Website Development',
        'Perfomance Optimization',
        'Care for Accesibility',
        'Communicate With Real People',
      ],
      isPrimary: true,
    },

    other: {
      title: 'Another Talent',
      whats: [
        'No Pixel to Pixel Design Match',
        'Not Understanding The Code',
        'Questionable Code Ownership',
        'Inconsistent Responsiveness',
        'Slow Web App and Bad UX',
        'Nil Human Empathy',
        'LLM The Only Best Friend',
      ],
      isPrimary: false,
    },
  };

  return (
    <SectionWrapper
      idName='comparison'
      sectionClass='py-10 px-4 lg:py-20 lg:px-30'
      divClass='gap-6 lg:gap-12 w-full'
    >
      <SectionDescription
        title={sectionDescription.title}
        subtitle={sectionDescription.subtitle}
      />
      <div className='flex-center w-full flex-col gap-6 sm:flex-row'>
        <ComparisonCard
          isPrimary={standouts.withMe.isPrimary}
          title={standouts.withMe.title}
          whats={standouts.withMe.whats}
        />
        <ComparisonCard
          isPrimary={standouts.other.isPrimary}
          title={standouts.other.title}
          whats={standouts.other.whats}
        />
      </div>
    </SectionWrapper>
  );
}

export default ComparisonSection;
