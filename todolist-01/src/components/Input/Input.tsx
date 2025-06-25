import { ButtonAdd } from './ButtonAdd';
import { InputText } from './InputText';
import { InputProps } from '../types';

export const Input = ({
  inputText,
  handleChange,
  active,
  todoAdd,
}: InputProps) => {
  return (
    <div className='flex gap-x-2'>
      <InputText inputText={inputText} handleChange={handleChange} />
      <ButtonAdd active={active} todoAdd={todoAdd} />
    </div>
  );
};
