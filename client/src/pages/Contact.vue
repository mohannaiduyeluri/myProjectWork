<script setup lang="ts">
import { ref } from 'vue';
import router from '../router';
import { addContactUs } from '../models/contactUs';

const label = ref("Submit");

const name = ref<string>('');
const email = ref<string>('');
const message = ref<string>('');

const submit = () => {
	label.value = "Message Sent!";
	console.log("submit got called ",name.value, email.value, message.value);
	addContactUs({
		name: name.value,
		email: email.value,
		message: message.value
	});
	setTimeout(() => {
		router.push('./tasks');
	}, 500);
}

</script>

<template>
	<div class="frm">
		<h1 class="title">Contact Us</h1>
		<input class="input" type="text" placeholder="Name" v-model="name" >
		<input class="input" type="email" placeholder="Email" v-model="email">
		<textarea class="textarea" type="text" placeholder="Message" v-model="message"></textarea>
		<button class="button is-success" @click="submit">{{ label }}</button>
	</div>
</template>

<style scoped lang="scss">

.frm {
	.title {
		width: 100%;
		text-align: center;
		margin-bottom: 50px;
	}

	input,
	textarea,
	button {
		margin-top: 20px;
	}

	textarea {
		resize: none;
	}
}
</style>