import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TodoTask } from 'components/models';

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<TodoTask[]>([]);

  function addTask(newTask: TodoTask) {
    tasks.value.push(newTask);
  }

  function deleteTask(id: string) {
    tasks.value.splice(
      tasks.value.findIndex((t) => t.id === id),
      1
    );
  }

  function toggleTask(id: string) {
    const task = tasks.value.filter((t) => t.id === id)[0];
    task.done = !task.done;
  }

  return { tasks, addTask, deleteTask, toggleTask };
});
