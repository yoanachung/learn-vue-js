<template>
  <div>
    <ul>
      <li v-for="task in todoTasks" :key="task.id">
        {{ task.id }} - {{ task.title }} - {{ task.done }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { TodoTask } from 'components/models';
import { defineComponent, ref } from 'vue';
import { useTodoStore } from '../../stores/todo-store';

export default defineComponent({
  setup() {
    const todoStore = useTodoStore();
    const todoTasks = ref<TodoTask[]>(todoStore.tasks);
    return { todoTasks };
  },
});
</script>

<style></style>
