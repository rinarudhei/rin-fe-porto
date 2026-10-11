import { Separator } from '@/components/ui/separator';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

function ProjectCard({ title, description, image, alt }: ProjectCardProps) {
  return (
    <div className='flex-center relative w-fit flex-col'>
      {/* Image Container */}
      <div className='flex-center gap-2 rounded-3xl bg-neutral-100 p-4'>
        <div className='size-82.5 overflow-clip rounded-md md:size-112 lg:size-60 xl:size-82.5'>
          <img src={image} alt={alt} className='object-cover' />
        </div>
      </div>

      {/* Project Info Container */}
      <div className='flex-center w-0 min-w-full rounded-3xl bg-neutral-100 p-4'>
        <div className='flex-center flex-col gap-3'>
          {/* Project title */}
          <div className='text-md xl:text-md w-full text-start font-bold tracking-[-0.02em] text-neutral-950 md:text-lg lg:text-sm'>
            {title}
          </div>
          <Separator
            orientation='horizontal'
            className='h-px w-full bg-neutral-300'
          />
          {/* Project description */}
          <div className='tracking-0 text-xs font-normal text-neutral-600 md:text-sm lg:text-xs'>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
