const url_login = "/api/users/login";

export const login = async (username: string, password: string) => {
	const method = 'POST';
	const headers = { 'Content-Type': 'application/json' };
	const body = JSON.stringify({ username, password });
	const res = await fetch(url_login, { method, headers, body });
	console.log(await res.json());
}
