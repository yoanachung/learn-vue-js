import { realtimeDB } from './firebase';
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  remove,
  update,
} from 'firebase/database';
import { TodoTask } from 'src/components/models';

const useTaskRealtimeDB = () => {
  async function readTasks(): Promise<TodoTask[]> {
    const tasksRef = ref(getDatabase());
    const data = await get(child(tasksRef, 'tasks'));
    return Object.values(data.val()).map((v) => v as TodoTask);
  }

  function writeTask(task: TodoTask) {
    const tasksRef = ref(realtimeDB, `tasks/${task.id}`);
    set(tasksRef, task);
  }

  function removeTask(taskId: string) {
    const taskRef = ref(realtimeDB, `tasks/${taskId}`);
    remove(taskRef);
  }

  function updateTask(task: TodoTask) {
    const updates: { [key: string]: TodoTask } = {};
    updates[`tasks/${task.id}`] = task;
    update(ref(realtimeDB), updates);
  }

  return {
    readTasks,
    writeTask,
    removeTask,
    updateTask,
  };
};

export default useTaskRealtimeDB;
