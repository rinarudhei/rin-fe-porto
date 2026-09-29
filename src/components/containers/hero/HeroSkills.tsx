import HeroSkill from './HeroSkill';

import Golang from '@/assets/icons/go.svg?react';
import NodeJs from '@/assets/icons/node.svg?react';
import ReactIcon from '@/assets/icons/react.svg?react';
import TailwindCss from '@/assets/icons/tailwindcss.svg?react';

function HeroSkills() {
  const highlightedSkills = [
    { id: 1, icon: (props: { className: string }) => <ReactIcon {...props} /> },
    {
      id: 2,
      icon: (props: { className: string }) => <TailwindCss {...props} />,
    },
    { id: 3, icon: (props: { className: string }) => <NodeJs {...props} /> },
    { id: 4, icon: (props: { className: string }) => <Golang {...props} /> },
  ];
  return (
    <div className='lg:flex-center border-primary-300 absolute top-[87.57px] hidden flex-col gap-5.5 rounded-full border-[1.36px] px-5.5 py-8.25'>
      {highlightedSkills.map((s) => (
        <HeroSkill key={s.id} icon={<s.icon className='size-12.75' />} />
      ))}
    </div>
  );
}

export default HeroSkills;
