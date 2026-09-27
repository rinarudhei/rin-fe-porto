import React from 'react';

type MetricProp = {
  value: string;
  label: string;
  valueIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

function Metric({ value, label, valueIcon: ValueIcon }: MetricProp) {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-1'>
        <div className='text-display-md lg:text-display-lg xl:text-display-xl font-bold text-white'>
          {value}
        </div>
        {ValueIcon && <ValueIcon className='size-6 lg:size-7 xl:size-8' />}
      </div>
      <div className='text-xs font-semibold text-white lg:text-sm xl:text-base'>
        {label}
      </div>
    </div>
  );
}

export default Metric;
