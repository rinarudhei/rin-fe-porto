type HeroSkillProps = {
  icon: React.ReactNode;
};

function HeroSkill({ icon }: HeroSkillProps) {
  return (
    <div className='flex-center border-primary-300 size-[69.43px] rounded-full border-[1.36px] p-[11.6px]'>
      {icon}
    </div>
  );
}

export default HeroSkill;
