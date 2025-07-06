import React from 'react';

export type ButtonAddProps = {
  active: boolean;
  onAddTodo: () => void;
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
  deleteTodoAction: (id: string) => void;
  // toggleCheck: (id: string) => void;
};

export type TabProps = {
  counter: number;
};

export type NewTodo = {
  task: string;
};
