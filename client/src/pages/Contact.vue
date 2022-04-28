<script scoped lang="ts">
	//
</script>

<template>
	<h1 class="title">Contact Us</h1>

	<div class="frm">
		<input class="input" type="text" placeholder="Name">
		<input class="input" type="email" placeholder="Email">
		<textarea class="textarea" type="text" placeholder="Message"></textarea>
		<button class="button is-success">Submit</button>
	</div>
</template>

<style scoped lang="scss">
.title {
	position: absolute;
	top: 200px;
	left: 50%;
	transform: translateX(-50%);
}

.frm {
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