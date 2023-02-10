<template>
  <div>
    <input @keyup.enter="addTask" v-model="newTitle" />
  </div>
</template>

<script lang="ts">
import { TodoTask } from 'components/models';
import { useTodoStore } from '../../stores/todo-store';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const newTitle = ref('');
    const todoStore = useTodoStore();

    function addTask() {
      const newTask: TodoTask = {
        id: todoStore.nextId,
        title: newTitle.value,
        done: false,
      };

      todoStore.addTask(newTask);
      return { newTitle, addTask };
    }

    return { newTitle, addTask };
  },
});
</script>

<style></style>
