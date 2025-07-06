import { NewTodo, TodoItem } from '@/components/types';
import { api } from '@/store/api';

export const todoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TodoItem[], void>({
      query: () => 'todos',
    }),
    postTodo: builder.mutation<TodoItem, NewTodo>({
      query: (newTodo) => ({
        url: 'todos',
        method: 'POST',
        body: newTodo,
      }),
    }),
  }),
});

export const { useGetTodosQuery, usePostTodoMutation } = todoApi;
