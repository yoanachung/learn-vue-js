import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TodoTask } from 'components/models';
import useTaskFirestore from 'src/firebase/todo-task-firestore';

export const useTaskStore = defineStore('task', () => {
  const firebase = useTaskFirestore();
  const tasks = ref<TodoTask[]>([]);

  loadTasks();

  function loadTasks() {
    firebase.readTasks((data: TodoTask[]) => {
      tasks.value = data;
    });
  }

  function addTask(newTask: TodoTask) {
    firebase.writeTask(newTask);
  }

  function deleteTask(id: string) {
    firebase.deleteTask(id);
  }

  function toggleTask(id: string) {
    const task = tasks.value.filter((t) => t.id === id)[0];
    task.done = !task.done;
    firebase.writeTask(task);
  }

  return { tasks, addTask, deleteTask, toggleTask };
});
