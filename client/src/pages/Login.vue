<script setup lang="ts">
import { ref } from 'vue';
import { login } from '../request';
import router from '../router';

const user = ref<string>('');
const pass = ref<string>('');
const lErr = ref<string>('');

const handle_login = async () => {
	lErr.value = ''

	const res = await login(user.value, pass.value);

	if(!res.success) {
		return lErr.value = res.errors[0];
	};

	router.push('/tasks');
};

</script>

<template>
	<img class="ill" src="../assets/todo.svg" width="800" />
	<div class="container">
		<h1 class="title">To Do App</h1>
		<input class="input" type="text" placeholder="Username" v-model="user" />
		<input class="input" type="password" placeholder="Password" v-model="pass" />
		<button class="button" @click="handle_login">
			<span class="icon is-small">
				<i class="fa-solid fa-right-to-bracket"></i>
			</span>
			<span>Log In</span>
		</button>
		<p>{{lErr}}</p>
	</div>
</template>

<style scoped lang="scss">

.ill {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 10%;
}

.title {
	font-size: 48px;
	margin-bottom: 100px;
}
.container {
	position: absolute;
	top: 40%;
	right: 20%;
	transform: translateY(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: unset !important;

	p {
		position: absolute;
		bottom: -50px;
		color: red;
	}

	button {
		color: white;
		background-color: #ea4c88;
		border-color: grey;
	}

	input {
		background-color: #ffffff;

		&::placeholder {
			color: grey;
		}
	}

	input,
	button {
		width: 250px;
		margin-top: 20px;
	}
}
</style>
