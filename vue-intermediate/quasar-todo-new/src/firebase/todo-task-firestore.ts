import { TodoTask } from 'src/components/models';
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import { firestore } from './firebase';

const PATH = 'tasks';

const useTaskFirestore = () => {
  function readTasks(callback: (tasks: TodoTask[]) => void) {
    onSnapshot(collection(firestore, PATH), (snapshot) => {
      const data = snapshot.docs.map((d) => d.data() as TodoTask);
      callback(data);
    });
  }

  function writeTask(task: TodoTask) {
    setDoc(doc(firestore, PATH, task.id), task);
  }

  function deleteTask(taskId: string) {
    deleteDoc(doc(firestore, PATH, taskId));
  }

  return {
    readTasks,
    writeTask,
    deleteTask,
  };
};

export default useTaskFirestore;
