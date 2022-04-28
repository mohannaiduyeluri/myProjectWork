<script setup lang="ts">
import { ref } from 'vue';
import router from '../router';

const label = ref("Submit");

const submit = () => {
	label.value = "Message Sent!";
	setTimeout(() => {
		router.push('./tasks');
	}, 500);
}

</script>

<template>
	<div class="frm">
		<h1 class="title">Contact Us</h1>
		<input class="input" type="text" placeholder="Name">
		<input class="input" type="email" placeholder="Email">
		<textarea class="textarea" type="text" placeholder="Message"></textarea>
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