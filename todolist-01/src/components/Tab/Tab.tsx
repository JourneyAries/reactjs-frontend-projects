import { TabProps } from '../types';

export const Tab = ({ counter }: TabProps) => {
  return (
    <div className='flex gap-x-1 px-1 py-2 border-b-2 border-violet-600 cursor-pointer'>
      <p className='text-violet-600'>All Task</p>
      <p className='text-violet-300'>({counter})</p>
    </div>
  );
};
