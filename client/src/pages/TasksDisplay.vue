
<script>
</script>
<template>
  <div class="tasks">
    <div class="tskLst">
      <div class="card task" v-for="task in getTasks(tasks)" :key="task.title">
        <div class="title">{{ task.title }}</div>
        <div class="data">
          <div class="c">for</div>
          <span>{{ task.for }}</span>
        </div>
        <div class="data">
          <div class="c">due</div>
          <span>{{ task.date }}</span>
        </div>
        <div class="data">
          <div class="c">by</div>
          <span>{{ task.by }}</span>
        </div>
        <button :class="done(task)" @click="() => (task.done = !task.done)">
          {{ task.done ? "✘" : "✔" }}
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
