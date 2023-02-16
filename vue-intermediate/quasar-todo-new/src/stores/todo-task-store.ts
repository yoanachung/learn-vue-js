import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TodoTask } from 'components/models';
import useTaskFirebase from 'src/firebase/todo-task-firebase';

export const useTaskStore = defineStore('task', () => {
  const firebase = useTaskFirebase();
  const tasks = ref<TodoTask[]>([]);

  loadTasks();

  async function loadTasks() {
    tasks.value = await firebase.readTasks();
  }

  function addTask(newTask: TodoTask) {
    tasks.value.push(newTask);
    firebase.writeTask(newTask);
  }

  function deleteTask(id: string) {
    tasks.value.splice(
      tasks.value.findIndex((t) => t.id === id),
      1
    );
    firebase.removeTask(id);
  }

  function toggleTask(id: string) {
    const task = tasks.value.filter((t) => t.id === id)[0];
    task.done = !task.done;
    firebase.updateTask(task);
  }

  return { tasks, addTask, deleteTask, toggleTask };
});
