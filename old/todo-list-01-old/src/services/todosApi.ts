import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Todo = {
  id: string;
  todo: string;
  checked: boolean;
}

export const todosApi = createApi({

  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({baseUrl: '/api/'}),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => 'todos',
      providesTags: ['Todos'],
    }),
    toggleChecked: builder.mutation<Todo, {id: string, checked: boolean}>({
      query: ({id, checked}) => ({
        url: `todos/${id}`,
        method: 'PATCH',
        body: {checked}
      }),
      invalidatesTags: ['Todos']
 
    })
  }) 
})


