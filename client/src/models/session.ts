import { reactive } from 'vue';

export interface ISession {
	avatar: string;
	isLoggedIn: boolean;
	username: string | null;
}

export const session: ISession = reactive<ISession>({
	avatar: '',
	isLoggedIn: false,
	username: null,
});

export const endSession = () => {
	session.username = null;
	session.avatar = '';
	session.isLoggedIn = false;
};