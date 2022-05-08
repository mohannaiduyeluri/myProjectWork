import { ref } from 'vue';
import {addContactus } from '../request';

export interface IContactUs {
	name: string;
	email: string;
	message: string;
}


export async function addContactUs(contact: IContactUs){
    console.log("submit got called  2");
	const e = await addContactus(contact);
}