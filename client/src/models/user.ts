import { ref } from 'vue';

export interface IUser {
	username: string;
	password: string;
}

export const users = ref<IUser[]>([
	{
		username: 'Mohan',
		password: 'Mohan',
	},
	{
		username: 'user_2',
		password: 'Mohan',
	},
]);
