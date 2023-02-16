import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TodoFolder } from 'components/models';
import useFolderFirestore from 'src/firebase/todo-folder-firestore';

export const useFolderStore = defineStore('todo', () => {
  const firebase = useFolderFirestore();
  const folders = ref<TodoFolder[]>([]);
  const currentFolderId = ref<string>('');

  loadFolders();

  function loadFolders() {
    firebase.readFolders((data: TodoFolder[]) => {
      folders.value = data;
      openFolder(currentFolderId.value);
    });
  }

  function addFolder(newFolder: TodoFolder) {
    firebase.writeFolder(newFolder);
    openFolder(newFolder.id);
  }

  function deleteFolder(id: string) {
    firebase.deleteFolder(id);
    openFolder(currentFolderId.value);
  }

  function openFolder(id: string) {
    if (folders.value.findIndex((f) => f.id === id) > -1) {
      currentFolderId.value = id;
    } else {
      currentFolderId.value = folders.value[0].id;
    }
  }

  return {
    folders,
    currentFolderId,
    addFolder,
    deleteFolder,
    openFolder,
  };
});
