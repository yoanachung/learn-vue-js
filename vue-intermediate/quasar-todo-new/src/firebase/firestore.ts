import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import { firestore } from './firebase';

function useFirestore<T>(path: string) {
  function read(callback: (data: T[]) => void) {
    onSnapshot(collection(firestore, path), (snapshot) => {
      const data = snapshot.docs.map((d) => d.data() as T);
      callback(data);
    });
  }

  function write(id: string, data: T) {
    setDoc(doc(firestore, path, id), data as object);
  }

  function remove(id: string) {
    deleteDoc(doc(firestore, path, id));
  }

  return {
    read,
    write,
    remove,
  };
}

export default useFirestore;
