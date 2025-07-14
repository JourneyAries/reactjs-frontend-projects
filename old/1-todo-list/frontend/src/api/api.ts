import axios from 'axios';
import { SiUdotsdotnews } from 'react-icons/si';

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
}; --

// [DELETE]
export const deleteTodoApi = async (_id: string) => {
	const response = await axios.delete(`${BASE_URL}/todos/${_id}`);
	return response.data;
}; 

function
// [PATCH]
export const patchTodoApi = async (
	_id: string,[]asd
	updatedData: { checked: boolean },
) => {
	const response = await axios.patch(`${BASE_URL}/todos/${_id}`, updatedData);

}; 