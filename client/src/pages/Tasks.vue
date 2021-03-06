<script setup lang="ts">
import { ref } from 'vue';
import { session } from '../models/session';
import { ITask, tasks, load, addNewTask, udpateExistingTask } from '../models/tasks';
import { users, loadUsers } from '../models/user';
import NavBar from '../components/nav.vue';
import Calendar from '../components/calendar.vue';
import router from '../router';

load();
loadUsers();

const curTab = ref("All");

const clsTabs = (tab: string) => tab === curTab.value ? 'tab active' : 'tab';

if (!session.isLoggedIn) router.push('/');

const filterTasks = (e: ITask[]): ITask[] => {
	e = Array.isArray(e) ? e.sort((a, b) => a.done ? 1 : -1) : [];

	if (curTab.value == "Assigned")
		filteredTasks.value = e?.filter(t => t.to === session.username);

	else if (curTab.value == "Created")
		filteredTasks.value = e?.filter(t => t.by === session.username);
	else if (curTab.value == "All")
		filteredTasks.value = e;

}

const modalSwitch = ref<boolean>(false);

const modalCls = (modalState: boolean): string => modalState ? 'modal is-active' : 'modal';

const title = ref<string>('');
const tfor = ref<string>('');
const date = ref<string>('');
const filteredTasks = ref<ITask[]>([]);
filteredTasks.value = tasks.value;

const pushTask = () => {
	if (!session.username) return;
	var dateArr = date.value.split('-');
	date.value = dateArr[1] + '-' + dateArr[2] + '-' + dateArr[0];
	addNewTask({
		_id: '',
		by: session.username,
		date: date.value,
		done: false,
		to: tfor.value,
		title: title.value
	});
	load();
	modalSwitch.value = false;
}


const taskStatusUpdate = (task: ITask) => {
	if (!session.username) return;
	task.done = !task.done;
	udpateExistingTask(task);
}
const clsDone = (task: ITask) => task.done ? 'button is-succes is-small' : 'button is-danger is-small'

const setCurTab = (tab: string) => curTab.value = tab;

const taskSwitch = () => {
	return curTab.value !== "Calendar"
}

const gotoContact = () => {
	router.push('/contact');
}

const autoSearch = () => {
	router.push('/autoSearch');
}

</script>

<template>
	<button class="button add" @click="() => modalSwitch = true">
		<span class="icon is-small">
			<i class="fa-solid fa-plus"></i>
		</span>
		<span>Add</span>
	</button>
	<div class="card tabs">
		<div :class="clsTabs('Assigned')" @click="setCurTab('Assigned'); filterTasks(tasks)" style="margin-top: 80%;">
			Assigned</div>
		<div :class="clsTabs('Created')" @click="setCurTab('Created'); filterTasks(tasks)">Created</div>
		<div :class="clsTabs('All')" @click="setCurTab('All'); filterTasks(tasks)">All</div>
		<div :class="clsTabs('Calendar')" @click="setCurTab('Calendar')">Calender</div>
		<div class="tab" @click="gotoContact">Contact Us</div>
		<div class="tab" @click="autoSearch">Auto Search</div>
	</div>

	<div :class="modalCls(modalSwitch)">
		<div class="modal-background" @click="() => modalSwitch = false"></div>
		<div class="modal-content">
			<div class="card">
				<h1>Add Task</h1>
				<input class="input is-normal" type="text" placeholder="Title" v-model="title" />

				<div class="dropdown is-hoverable">
					<div class="dropdown-trigger">
						<div class="field">
							<div class="control">
								<input class="input is-normal" type="search	" placeholder="For" v-model="tfor" />
							</div>
						</div>
					</div>
					<div class="dropdown-menu" id="dropdown-menu" role="menu">
						<div class="dropdown-content">
							<a href="#" class="dropdown-item" v-for="user in users"
								@click="() => tfor = user.username">{{ user.username }}</a>
						</div>
					</div>
				</div>

				<input class="input is-normal" type="date" placeholder="Date" v-model="date" />
				<button class="button is-normal" @click="pushTask">Add</button>
			</div>
		</div>
		<button class="modal-close is-large" aria-label="close" @click="() => modalSwitch = false"></button>
	</div>

	<!-- <NavBar /> -->

	<div v-if="taskSwitch()" class="tasks">
		<div class="tskLst">
			<div class="card task" v-for="task in filteredTasks" :key="task.title">
				<div class="title">{{ task.title }}</div>
				<div class="data">
					<div class="c">for</div>
					<span>{{ task.to }}</span>
				</div>
				<div class="data">
					<div class="c">due</div>
					<span>{{ task.date }}</span>
				</div>
				<div class="data">
					<div class="c">by</div>
					<span>{{ task.by }}</span>
				</div>
				<button :class="clsDone(task)" @click="taskStatusUpdate(task)">
					{{ task.done ? '✘' : '✔' }}
				</button>
			</div>
		</div>
	</div>

	<Calendar class="calendar" v-if="!taskSwitch()" />

</template>

<style scoped lang="scss">
.calendar {
	position: absolute;
	top: 150px;
	left: 50%;
	transform: translateX(-50%);
}

.modal-content {
	width: 500px;
	height: 600px;

	.card {
		display: flex;
		height: 100%;
		width: 100%;
		background-color: white;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h1 {
			font: 'Roboto';
			font-size: 24px;
			font-weight: 500;
			margin-bottom: 20px;
		}

		.dropdown.is-hoverable {
			width: 80%;

			.dropdown-trigger {
				width: 100%;

				input {
					width: 100%;
				}
			}
		}

		input {
			margin-top: 20px;
			width: 80%;
		}

		button {
			margin-top: 20px;
			width: 80%;
		}
	}
}

.tasks {
	position: absolute;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	top: 100px;
	left: 300px;
	right: 50px;
	height: 80%;
	width: 80%;

	.tskLst {
		top: 50px;
		position: relative;
		display: flex;
		height: calc(100% - 50px);
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		.task {
			width: 95%;
			display: block;
			margin-top: 10px;
			padding-bottom: 20px;

			.title {
				margin: 10px 0 0 10px;
				font-size: 18px;
				font-weight: 600;
				padding: 10px;
				width: 200px;
			}

			.data {
				margin: 10px 0 0 20px;
				font-weight: 500;
				color: rgb(167, 167, 167);
				text-align: center;
				display: inline;

				.c {
					display: inline-block;
				}

				span {
					color: white;
					font-size: 14px;
					font-weight: 600;
					border-radius: 10px;
					background-color: #f14668;
					padding: 0 10px 0 10px;
					margin-left: 10px;
				}
			}

			button {
				position: absolute;
				bottom: 20px;
				right: 30px;
				padding: 5px;
				height: 2em;
				font-weight: 600;
				width: 40px;
			}
		}
	}
}

.add {
	position: absolute;
	width: 200px;
	left: 50px;
	top: 200px;
	height: 40px;
	font-weight: 700;
	font-size: 20px;
	background-color: lightcoral;
	color: white;
	justify-content: center;
	z-index: 2;
}

.tabs {
	position: absolute;
	width: 300px;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	box-shadow: none;
	border-right: solid grey 2px;
	border-radius: 0;

	.tab {
		font-weight: 700;
		font-size: 20px;
		color: rgb(170, 170, 170);
		cursor: pointer;
		width: 100%;
		height: 40px;
		padding: 50px;
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			background-color: rgb(211, 211, 211);
		}
	}

	.active {
		color: rgb(46, 46, 46);
	}
}
</style>