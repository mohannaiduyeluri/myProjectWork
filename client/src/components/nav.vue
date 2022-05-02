<script setup lang="ts">
	import { endSession, session } from '../models/session';
	import router from '../router';

	const logout = () => {
		endSession();
		router.push('/');
	};

</script>

<template>
	<nav v-if="session.username">
		<h1 class="title">T A S K S</h1>
		<div class="sessionContainer">
			<img :src="session.avatar">
			<p>{{ session.username }}</p>
			<button @click="logout" class="button is-danger">
				<span class="icon is-small">
					<i class="fa-solid fa-right-from-bracket"></i>
				</span>
				<span>Log Out</span>
			</button>
		</div>
	</nav>
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

	h1 {
		position: absolute;
		top: 30px;
		left: 50%;
		transform: translateX(-50%);
	}

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

</style>