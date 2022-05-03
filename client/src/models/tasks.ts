import { ref } from 'vue';
import { fetchTasks, addTask } from '../request';

export interface ITask {
	by: string;
	date: string;
	done: boolean;
	title: string;
	to: string;
}

export async function load(){
	const e = await fetchTasks();
	tasks.value = e.data;
}

export async function addNewTask(task: ITask){
	const e = await addTask(task);
	// console.log("prnintg at add new task response client", e);
	// tasks.value = e.data;
}

export const tasks = ref<ITask[]>([
	{
		by: 'Mohan',
		date: '04-22-2022',
		done: false,
		title: 'Update NodeJS',
		to: 'user_2'
	},
	{
		by: 'user_2',
		date: '04-28-2022',
		done: false,
		title: 'Update Vue',
		to: 'Mohan'
	},
	{
		by: 'user_2',
		date: '04-24-2022',
		done: true,
		title: 'Integrate jQuery',
		to: 'Mohan'
	},
	{
		by: 'user_2',
		date: '04-24-2022',
		done: true,
		title: 'Make a demo',
		to: 'Mohan'
	}
]);