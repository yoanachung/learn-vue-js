import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TodoFolder } from 'components/models';

export const useFolderStore = defineStore('todo', () => {
  const folders = ref<TodoFolder[]>([]);
  const nextId = ref(0);

  function addFolder(newTask: TodoFolder) {
    nextId.value++;
    folders.value.push(newTask);
  }

  function deleteFolder(id: number) {
    folders.value.splice(
      folders.value.findIndex((t) => t.id === id),
      1
    );
  }

  return { folders, nextId, addFolder, deleteFolder };
});
