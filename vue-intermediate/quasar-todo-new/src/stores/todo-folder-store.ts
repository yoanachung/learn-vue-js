import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TodoFolder } from 'components/models';
import useFolderRealtimeDB from 'src/firebase/todo-folder-realtime';

export const useFolderStore = defineStore('todo', () => {
  const firebase = useFolderRealtimeDB();
  const folders = ref<TodoFolder[]>([]);
  const currentFolderId = ref<string>('');

  loadFolders();

  async function loadFolders() {
    folders.value = await firebase.readFolders();
    currentFolderId.value = folders.value[0].id;
  }

  function addFolder(newFolder: TodoFolder) {
    folders.value.push(newFolder);
    firebase.writeFolder(newFolder);
  }

  function deleteFolder(id: string) {
    folders.value.splice(
      folders.value.findIndex((t) => t.id === id),
      1
    );
    firebase.removeFolder(id);
    currentFolderId.value = folders.value[0].id;
  }

  function openFolder(id: string) {
    currentFolderId.value = id;
  }

  return {
    folders,
    currentFolderId,
    addFolder,
    deleteFolder,
    openFolder,
  };
});
