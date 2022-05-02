import { session } from './models/session';

const url_login = "http://localhost:3001/api/users/login";

export interface IRes<T> {
	success: boolean;
	errors: string[];
	data: T
}

export type ILogin = IRes<{
	username: string;
	avatar: string;
	token: string;
}>;

export const login = async (username: string, password: string) => {
	const method = 'POST';
	const headers = { 'Content-Type': 'application/json' };
	const body = JSON.stringify({ username, password });
	const res = await fetch(url_login, { method, headers, body });

	const resBody: ILogin = await res.json();
	
	if(!resBody.success) {
		console.log(resBody);
		return resBody;
	}

	session.username = resBody.data.username;
	session.avatar = resBody.data.avatar;
	session.isLoggedIn = true;

	return resBody;
}
