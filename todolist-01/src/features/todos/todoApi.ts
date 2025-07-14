import { NewTodo, TodoItem } from '@/components/types';
import { api } from '@/store/api';

export const todoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TodoItem[], void>({
      query: () => 'todos',
      providesTags: ['todos'],
    }),
    postTodo: builder.mutation<TodoItem, NewTodo>({
      query: (newTodo) => ({
        url: 'todos',
        method: 'POST',
        body: newTodo,
      }),
      invalidatesTags: ['todos'],
    }),
    deleteTodo: builder.mutation<void, string>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['todos'],
    }),
    patchTodo: builder.mutation<TodoItem, { id: string; checked: boolean }>({
      query: ({ id, checked }) => ({
        url: `todos/${id}`,
        method: 'PATCH',
        body: { checked },
      }),
      invalidatesTags: ['todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  usePostTodoMutation,
  useDeleteTodoMutation,
  usePatchTodoMutation,
} = todoApi;
