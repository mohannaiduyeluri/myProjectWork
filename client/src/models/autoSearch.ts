import { ref } from 'vue';
import {autoSeachSubmit } from '../request';

export interface ITask {
	_id: string;
	first_name: string;
	last_name: string;
	date: boolean;
	gender: string;
}

export async function autoSeach(name: string){
    console.log("submit got called  2");
	const e = await autoSeachSubmit(name);
    return e;
}