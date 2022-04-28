import { ref } from 'vue';

export interface ITask {
	by: string;
	date: string;
	done: boolean;
	title: string;
	for: string;
}

export const tasks = ref<ITask[]>([
	{
		by: 'Mohan',
		date: '04-22-2022',
		done: false,
		title: 'Update NodeJS',
		for: 'user_2'
	},
	{
		by: 'user_2',
		date: '04-28-2022',
		done: false,
		title: 'Update Vue',
		for: 'Mohan'
	},
	{
		by: 'user_2',
		date: '04-24-2022',
		done: true,
		title: 'Do something',
		for: 'Mohan'
	}
]);