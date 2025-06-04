import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

// [GET]
export const getTodosApi = async () => {
	const response = await axios.get(`${BASE_URL}/todos`);
	return response.data;
};

// [POST]
export const postTodoApi = async (text: string) => {
	const response = await axios.post(`${BASE_URL}/todos`, { text });
	const todo = response.data.data;
	const { _id, text: todoText, checked } = todo;
	return { _id: _id, text: todoText, checked };
};

// [DELETE]
export const deleteTodoApi = async (_id: string) => {
	const response = await axios.delete(`${BASE_URL}/todos/${_id}`);
	return response.data;
};

// [PATCH]
export const patchTodoApi = async (
	_id: string,
	updatedData: { checked: boolean },
) => {
	const response = await axios.patch(`${BASE_URL}/todos/${_id}`, updatedData);
	const todo = response.data.data;
	const { _id: id, text, checked } = todo;
	return { _id: id, text, checked };
};
