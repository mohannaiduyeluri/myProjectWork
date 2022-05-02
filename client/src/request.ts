const url = "https://localhost:3000";
const url_login = "https://localhost:3000/api/users/login";

export const login = async (username: string, password: string) => {
	const method = 'POST';
	const headers = { 'Content-Type': 'application/json' };
	const body = JSON.stringify({ username, password });
	const res = await fetch(url_login, { method, headers, body });
	console.log(await res.json());
}
