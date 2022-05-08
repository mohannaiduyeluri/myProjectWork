<script  setup lang="ts">
import { tasks } from '../models/tasks';
</script>
<template>
	<button class="button add" @click="() => modalSwitch = true">
		<span class="icon is-small">
			<i class="fa-solid fa-plus"></i>
		</span>
		<span>Add</span>
	</button>
	<div class="card tabs">
		<br><br><br><br>
		<div :class="clsTabs('Assigned')" @click="setCurTab('Assigned');filterTasks(tasks)">Assigned</div>
		<div :class="clsTabs('Created')" @click="setCurTab('Created');filterTasks(tasks)">Created</div>
		<div :class="clsTabs('All')" @click="setCurTab('All');filterTasks(tasks)">All</div>
		<div :class="clsTabs('Calendar')" @click="setCurTab('Calendar')">Calender</div>
		<div class="tab" @click="gotoContact">Contact Us</div>
	</div>

	<div :class="modalCls(modalSwitch)">
  	<div class="modal-background" @click="()=>modalSwitch=false"></div>
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
				<button class="button is-normal" @click="pushTask">Add</button>
			</div>
  	</div>
  	<button class="modal-close is-large" aria-label="close" @click="()=>modalSwitch=false"></button>
	</div>

	<!-- <NavBar /> -->

	<div v-if="taskSwitch()" class="tasks">
		<div class="tskLst">
				<div class="card task" v-for="task in filteredTasks" :key="task.title">
					<div class="title">{{task.title}}</div>
					<div class="data">
						<div class="c">for</div>
						<span>{{task.to}}</span>
					</div>
					<div class="data">
						<div class="c">due</div>
						<span>{{task.date}}</span>
					</div>
					<div class="data">
						<div class="c">by</div>
						<span>{{task.by}}</span>
					</div>
					<button :class="clsDone(task)" @click="()=>task.done = !task.done">
						{{ task.done ? '✘' : '✔' }}
					</button>
				</div>
			</div>
	</div>
	
	<Calendar class="calendar" v-if="!taskSwitch()" />

</template>