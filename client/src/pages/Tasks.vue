<script setup lang="ts">
import { ref } from 'vue';

const tabs = ["Assigned", "Created", "All"];
const currentTab = ref(tabs[0]);

const tabClass = (tab: string) => tab === currentTab.value ? 'tab active' : 'tab';

</script>

<template>
	<h1>T A S K S</h1>
	<div class="card add">Add</div>
	<div class="card tabs">
		<div :class="tabClass(tab)" v-for="tab in tabs" @click="() => currentTab = tab">{{ tab }}</div>
	</div>
</template>

<style scoped lang="scss">
h1 {
	position: absolute;
	color: rgb(41, 41, 41);
	font-size: 36px;
	font-weight: 900;
	top: 100px;
	left: 125px;
}

.add {
	position: absolute;
	width: 200px;
	left: 100px;
	top: 200px;
	height: 40px;
	font-weight: 700;
	font-size: 20px;
	color: rgb(46, 46, 46);
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}

.tabs {
	position: absolute;
	width: 200px;
	height: 400px;
	top: 270px;
	left: 100px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;

	.tab {
		font-weight: 700;
		font-size: 20px;
		color: rgb(170, 170, 170);
		cursor: pointer;
	}

	.active {
		color: rgb(46, 46, 46);
	}
}
</style>