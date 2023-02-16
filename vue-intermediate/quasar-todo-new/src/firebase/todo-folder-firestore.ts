import { TodoFolder } from 'src/components/models';
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import { firestore } from './firebase';

const PATH = 'folders';

const useFolderFirestore = () => {
  function readFolders(callback: (folders: TodoFolder[]) => void) {
    onSnapshot(collection(firestore, PATH), (snapshot) => {
      const data = snapshot.docs.map((d) => d.data() as TodoFolder);
      callback(data);
    });
  }

  function writeFolder(folder: TodoFolder) {
    setDoc(doc(firestore, PATH, folder.id), folder);
  }

  function deleteFolder(folderId: string) {
    deleteDoc(doc(firestore, PATH, folderId));
  }

  return {
    readFolders,
    writeFolder,
    deleteFolder,
  };
};

export default useFolderFirestore;
