'use client'

import clsx from 'clsx';

type TabProps = {
  text: string;
  count: number;
  isActive: boolean;
  handleTab: () => void;
};

const Tab = ({ text, count, isActive, handleTab }: TabProps) => {
  return (
    <div
      onClick={handleTab}
      className={clsx(
        'flex gap-x-1 py-1 px-2 cursor-pointer ',
        isActive && 'border-b border-violet-600'
      )}>
      <span className={clsx(isActive ? 'text-violet-600' : 'text-slate-400')}>
        {text}
      </span>
      <span className={clsx(isActive ? 'text-violet-400' : 'text-slate-300')}>
        ({count})
      </span>
    </div>
  );
};

export default Tab;
