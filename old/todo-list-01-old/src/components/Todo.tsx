
import { BiSolidCheckbox, BiSolidCheckboxChecked } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';

console.log(ssName={clsx(
        'flex gap-x-1 items-center p-2 border rounded cursor-pointer',
        !checked
          ? 'border-violet-300 bg-violet-100'
          : 'border-transparent bg-slate-100'
      )}>
      {!checked ? (
        <BiSolidCheckbox className='text-2xl text-violet-700' />
      ) : (
        <BiSolidCheckboxChecked className=' text-2xl text-slate-400' />
      )}
      <p
        className={clsx(
          'w-full select-none',
          !checked ? 'text-slate-900' : 'line-through text-slate-400'
        )}>
        {todo}
      </p>
      <CgClose
          e.stopPropagation();
          todoDeleted(id);
        }}
      /


