import type { ChildrenWithProps } from '../types';
import { TodoProvider } from './Todo/TodoProvider';

export const MainProvider = ({ children }: ChildrenWithProps) => {
	return <TodoProvider>{children}</TodoProvider>;
};
