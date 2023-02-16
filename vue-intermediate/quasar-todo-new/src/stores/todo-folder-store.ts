import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TodoFolder } from 'components/models';

export const useFolderStore = defineStore('todo', () => {
  const folders = ref<TodoFolder[]>([]);
  const currentFolderId = ref<string>('');

  function addFolder(newFolder: TodoFolder) {
    folders.value.push(newFolder);
  }

  function deleteFolder(id: string) {
    folders.value.splice(
      folders.value.findIndex((t) => t.id === id),
      1
    );
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
