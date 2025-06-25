import React from 'react';

export type ButtonAddProps = {
  active: boolean;
  todoAdd: () => void;
};

export type InputTextProps = {
  inputText: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type InputProps = ButtonAddProps & InputTextProps;

export type TodoItem = {
  id: string;
  task: string;
  checked: boolean;
};

export type TodoProps = TodoItem & {
  toggleCheck: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export type TabProps = {
  counter: number;
};
