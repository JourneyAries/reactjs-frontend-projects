import { BsArrowUpRight } from 'react-icons/bs';
import { type ElementType } from 'react';

type ButtonProps = {
  icon: ElementType;
  text: string;
};

export const Button = ({ icon: Icon, text }: ButtonProps) => {
  return (
    <button className="flex w-full rounded items-center h-10 gap-x-2 py-2 px-3 border border-slate-300 group hover:bg-violet-700 hover:border-transparent">
      <div className="flex justify-center gap-x-2 w-full items-center">
        <Icon className="text-slate-400 text-2xl group-hover:text-white" />
        <p className="font-medium text-slate-900 w-full group-hover:text-white group-hover:font-bold">
          {text}
        </p>
      </div>
      <BsArrowUpRight className=" text-slate-500 text-xl w-[18px] h-[18px] group-hover:text-white group-hover:rotate-[45deg] group-hover:stroke-2 transition duration-300" />
    </button>
  );
};
