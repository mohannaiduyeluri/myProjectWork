<script setup lang="ts">
import { ref } from 'vue';
import { endSession, session } from '../models/session';
import { ITask, tasks } from '../models/tasks';
import { users } from '../models/user';
import router from '../router';

const tabs = ["Assigned", "Created", "All"];
const currentTab = ref(tabs[0]);

const tabClass = (tab: string) => tab === currentTab.value ? 'tab active' : 'tab';

if(!session.isLoggedIn) router.push('/');

const getTasks = (e: ITask[], done: boolean): ITask[] => {
	if(currentTab.value == tabs[0])
		if(done)
			return e.filter(t => t.for === session.username && t.done);
		else
			return e.filter(t => t.for === session.username && !t.done);

	if(currentTab.value == tabs[1])
		if(done)
			return e.filter(t => t.by === session.username && t.done);
		else
			return e.filter(t => t.by === session.username && !t.done);

	if(done)
		return e.filter(t => t.done);
	else
		return e.filter(t => !t.done);
}

const modalState = ref<boolean>(false);

const modalClass = (modalState: boolean): string => modalState ? 'modal is-active' : 'modal';

const title = ref<string>('');
const tfor = ref<string>('');
const date = ref<string>('');

const addTask = () => {
	if(!session.username) return;
	tasks.value.push({
		by: session.username,
		date: date.value,
		done: false,
		for: tfor.value,
		title: title.value
	});
	modalState.value = false;
}

const done = (task: ITask) => task.done ? 'button is-succes is-small' : 'button is-danger is-small'

const logout = () => {
	endSession();
	router.push('/');
};

</script>

<template>
	<h1>T A S K S</h1>
	<div class="card add" @click="() => modalState = true">Add</div>
	<div class="card tabs">
		<div :class="tabClass(tab)" v-for="tab in tabs" @click="() => currentTab = tab">{{ tab }}</div>
	</div>

	<div :class="modalClass(modalState)">
  	<div class="modal-background" @click="()=>modalState=false"></div>
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
								<a href="#" class="dropdown-item" v-for="user in users" @click="()=>tfor=user.username">{{user.username}}</a>
						</div>
					</div>
				</div>

				<input class="input is-normal" type="date" placeholder="Date" v-model="date" />
				<button class="button is-normal" @click="addTask">Add</button>
			</div>
  	</div>
  	<button class="modal-close is-large" aria-label="close" @click="()=>modalState=false"></button>
	</div>

	<nav>
		<div class="sessionContainer">
			<img :src="users.filter(e => e.username === session.username)[0].avatar">
			<p>{{ session.username }}</p>
			<button @click="logout" class="button is-danger">Log Out</button>
		</div>
	</nav>

	<div class="tasks">
		<div class="half">
			<div class="heading">TODO</div>
			<div class="taskList">
				<div class="card task" v-for="task in getTasks(tasks, false)" :key="task.title">
					<div class="title">{{task.title}}</div>
					<div class="data">
						<div class="c">for</div>
						<span>{{task.for}}</span>
					</div>
					<div class="data">
						<div class="c">due</div>
						<span>{{task.date}}</span>
					</div>
					<div class="data">
						<div class="c">by</div>
						<span>{{task.by}}</span>
					</div>
					<button :class="done(task)" @click="()=>task.done = true">
						{{ task.done ? '✘' : '✔' }}
					</button>
				</div>
			</div>
		</div>
		<div class="half">
			<div class="heading">DONE</div>
			<div class="taskList">
				<div class="card task" v-for="task in getTasks(tasks, true)" :key="task.title">
					<div class="title">{{task.title}}</div>
					<div class="data">
						<div class="c">for</div>
						<span>{{task.for}}</span>
					</div>
					<div class="data">
						<div class="c">due</div>
						<span>{{task.date}}</span>
					</div>
					<div class="data">
						<div class="c">by</div>
						<span>{{task.by}}</span>
					</div>
					<button :class="done(task)" @click="()=>task.done = false">
						{{ task.done ? '✘' : '✔' }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

nav {
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	height: 100px;
	width: 100%;
	background-color: transparent;

	.sessionContainer {
		display: flex;
		position: absolute;
		right: 0;
		margin: 20px;

		img {
			height: 48px;
			width: 48px;
			border-radius: 50%;
		}

		p {
			font-weight: 600;
			margin: 0 20px;
			display: flex;
			align-items: center;
		}

		button {
			font-weight: 500;
		}
	}
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

	.half {
		height: calc(100%);
		width: calc(50%);
		display: flex;
		align-items: center;
		flex-direction: column;

		.heading {
			position: absolute;
			font-size: 18px;
			font-weight: 800;
			height: 50px;
			line-height: 50px;
			top: 0;
			color: rgb(161, 161, 161);
		}

		.taskList {
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
}

h1 {
	position: absolute;
	color: rgb(41, 41, 41);
	font-size: 36px;
	font-weight: 900;
	top: 100px;
	left: 70px;
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
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		color: rgb(46, 46, 46);
	}
}

.tabs {
	position: absolute;
	width: 200px;
	height: 400px;
	top: 270px;
	left: 50px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;

	.tab {
		font-weight: 700;
		font-size: 20px;
		color: rgb(170, 170, 170);
		cursor: pointer;
		width: 100%;
		height: 40px;
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