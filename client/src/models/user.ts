import { ref } from 'vue';

export interface IUser {
	username: string;
	password: string;
	avatar: string;
}

export const users = ref<IUser[]>([
	{
		username: 'Mohan',
		password: 'Mohan',
		avatar: "https://randomuser.me/api/portraits/men/1.jpg"
	},
	{
		username: 'user_2',
		password: 'Mohan',
		avatar: "https://randomuser.me/api/portraits/men/2.jpg"
	},
]);
