import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TodoFolder } from 'components/models';

export const useFolderStore = defineStore('todo', () => {
  const defaultFolder: TodoFolder = {
    id: 0,
    name: 'My Folder',
  };

  const folders = ref<TodoFolder[]>([defaultFolder]);
  const nextId = ref(1);
  const currentFolderId = ref(0);

  function addFolder(newTask: TodoFolder) {
    nextId.value++;
    folders.value.push(newTask);
  }

  function deleteFolder(id: number) {
    folders.value.splice(
      folders.value.findIndex((t) => t.id === id),
      1
    );

    currentFolderId.value = folders.value[0].id;
  }

  function openFolder(id: number) {
    currentFolderId.value = id;
  }

  return {
    folders,
    nextId,
    currentFolderId,
    addFolder,
    deleteFolder,
    openFolder,
  };
});
