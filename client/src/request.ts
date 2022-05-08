import { IContactUs } from './models/contactUs';
import { session } from './models/session';
import { ITask } from './models/tasks';
import { IUser } from './models/user';

const url_login = "http://localhost:3001/api/";

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
	const res = await fetch(url_login+"users/login", { method, headers, body });

	const resBody: ILogin = await res.json();
	
	if(!resBody.success) {
		// console.log(resBody);
		return resBody;
	}

	session.username = resBody.data.username;
	session.avatar = resBody.data.avatar;
	session.isLoggedIn = true;

	return resBody;
}

export const fetchUsers = async () => {
	const method = 'GET';
	const headers = { 'Content-Type': 'application/json' };
	const res = await fetch(url_login+"users/", { method, headers});

	const resBody: Envelope<IUser[]> = await res.json();
	return resBody;
}

export const fetchTasks = async () => {
	const method = 'GET';
	const headers = { 'Content-Type': 'application/json' };
	const res = await fetch(url_login+"tasks/", { method, headers});

	const resBody: Envelope<ITask[]> = await res.json();
	return resBody;
}

export const addTask = async (task:ITask) => {
	// const method = 'POST';
	// const headers = { 'Content-Type': 'application/json' };
	// const body = JSON.stringify({ task });
	let options: RequestInit = {   };
	 options = {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(task) // body data type must match "Content-Type" header
	};
	const res = await fetch(url_login+"tasks/add/", options);

	const resBody: Envelope<ITask[]> = await res.json();
	return resBody;
}

export const updateTask = async (task:ITask) => {
	// const method = 'POST';
	// const headers = { 'Content-Type': 'application/json' };
	// const body = JSON.stringify({ task });
	let options: RequestInit = {   };
	 options = {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(task) // body data type must match "Content-Type" header
	};
	const res = await fetch(url_login+"tasks/update/"+task._id, options);

	const resBody: Envelope<ITask[]> = await res.json();
	return resBody;
}

export const addContactus = async (contactUs:IContactUs) => {
	// const method = 'POST';
	// const headers = { 'Content-Type': 'application/json' };
	// const body = JSON.stringify({ task });
	// console.log("submit got called  3, fetch", contactUs);
	let options: RequestInit = {   };
	 options = {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(contactUs) // body data type must match "Content-Type" header
	};
	await fetch(url_login+"contact/add/", options);
}

interface Envelope<T> {
	data: T;
	success: boolean;
	errors: string[];
}