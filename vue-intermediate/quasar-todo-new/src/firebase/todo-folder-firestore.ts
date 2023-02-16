import { TodoFolder } from 'src/components/models';
import useFirestore from './firestore';

const PATH = 'folders';
const firestore = useFirestore<TodoFolder>(PATH);

const useFolderFirestore = () => {
  function readFolders(callback: (folders: TodoFolder[]) => void) {
    firestore.read(callback);
  }

  function writeFolder(folder: TodoFolder) {
    firestore.write(folder.id, folder);
  }

  function deleteFolder(folderId: string) {
    firestore.remove(folderId);
  }

  return {
    readFolders,
    writeFolder,
    deleteFolder,
  };
};

export default useFolderFirestore;
