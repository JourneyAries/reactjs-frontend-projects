'use client'

type InputText = {
  inputText : string;
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({inputText, handleChange}:InputText) => {
  return (
    <input
      type='text'
      value={inputText} 
      onChange={handleChange}
      className='border-b border-slate-300 text-slate-600 p-2 focus:outline-0 focus:shadow-[0_2px_0_0_rgba(i)]  w-full'
      placeholder='Add new todo'
    />
  );
};

export default InputText; 
