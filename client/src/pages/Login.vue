<script setup lang="ts">
import { ref } from 'vue';
import { session } from '../models/session';
import { users } from '../models/user';
import router from '../router';

const user = ref<string>('');
const pass = ref<string>('');

const login = () => {
	const valid = users.value.filter(u => u.username === user.value && u.password === pass.value).length > 0;
	if (valid) {
		session.username = user.value;
		session.isLoggedIn = true;
		router.push('/tasks');
	}
	else
		user.value = "Invalid Credentials";
};

</script>

<template>
	<div class="container">
		<input class="input" type="text" placeholder="Username" v-model="user" />
		<input class="input" type="password" placeholder="Password" v-model="pass" />
		<button class="button" @click="login">Log In</button>
	</div>
</template>

<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	button {
		color: white;
		background-color: #ea4c88;
		border-color: grey;
	}

	input {
		background-color: #3b4148;
		color: white;

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
