import { ref } from 'vue';
import { fetchTasks, addTask, updateTask } from '../request';

export interface ITask {
	_id: string;
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
}

export async function udpateExistingTask(task: ITask){
	const e = await updateTask(task);
}

export const tasks = ref<ITask[]>([
	{
		_id: "1",
		by: 'Mohan',
		date: '04-22-2022',
		done: false,
		title: 'Update NodeJS',
		to: 'user_2'
	},
	{
		_id: "2",
		by: 'user_2',
		date: '04-28-2022',
		done: false,
		title: 'Update Vue',
		to: 'Mohan'
	},
	{
		_id: "3",
		by: 'user_2',
		date: '04-24-2022',
		done: true,
		title: 'Integrate jQuery',
		to: 'Mohan'
	},
	{
		_id: "4",
		by: 'user_2',
		date: '04-24-2022',
		done: true,
		title: 'Make a demo',
		to: 'Mohan'
	}
]);