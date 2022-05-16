import { IUser } from './models/user';

const url_login = "http://localhost:3001/api/users/";

export const fetchUsers = async () => {
	const method = 'GET';
	const headers = { 'Content-Type': 'application/json' };
	const res = await fetch(url_login, { method, headers});

	const resBody: Envelope<IUser[]> = await res.json();
	return resBody;
}

interface Envelope<T> {
	data: T;
	success: boolean;
	errors: string[];
}
