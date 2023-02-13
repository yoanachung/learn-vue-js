import { defineStore } from 'pinia';

import { ref } from 'vue';
import { TodoTask } from 'components/models';

export const useTodoStore = defineStore('todo', () => {
  const tasks = ref<TodoTask[]>([]);
  const nextId = ref(0);

  function addTask(newTask: TodoTask) {
    nextId.value++;
    tasks.value.push(newTask);
  }

  function deleteTask(id: number) {
    tasks.value.splice(
      tasks.value.findIndex((t) => t.id === id),
      1
    );
  }

  function toggleTask(id: number) {
    const task = tasks.value.filter((t) => t.id === id)[0];
    task.done = !task.done;
  }

  return { tasks, nextId, addTask, deleteTask, toggleTask };
});
