import { TodoTask } from 'src/components/models';
import useFirestore from './firestore';

const PATH = 'tasks';
const firestore = useFirestore<TodoTask>(PATH);

const useTaskFirestore = () => {
  function readTasks(callback: (tasks: TodoTask[]) => void) {
    firestore.read(callback);
  }

  function writeTask(task: TodoTask) {
    firestore.write(task.id, task);
  }

  function deleteTask(taskId: string) {
    firestore.remove(taskId);
  }

  return {
    readTasks,
    writeTask,
    deleteTask,
  };
};

export default useTaskFirestore;
