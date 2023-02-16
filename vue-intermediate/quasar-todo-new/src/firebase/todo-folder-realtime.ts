import { realtimeDB } from './firebase';
import { getDatabase, ref, child, get, set, remove } from 'firebase/database';
import { TodoFolder } from 'src/components/models';

const useFolderRealtimeDB = () => {
  async function readFolders(): Promise<TodoFolder[]> {
    const foldersRef = ref(getDatabase());
    const data = await get(child(foldersRef, 'folders'));
    return Object.values(data.val()).map((v) => v as TodoFolder);
  }

  function writeFolder(folder: TodoFolder) {
    const foldersRef = ref(realtimeDB, `folders/${folder.id}`);
    set(foldersRef, folder);
  }

  function removeFolder(folderId: string) {
    const folderRef = ref(realtimeDB, `folders/${folderId}`);
    remove(folderRef);
  }

  return {
    readFolders,
    writeFolder,
    removeFolder,
  };
};

export default useFolderRealtimeDB;
