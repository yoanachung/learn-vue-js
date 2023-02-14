<template>
  <div>
    <q-item-label header class="row items-center justify-between">
      <span>Folder</span>
      <q-btn @click="prompt = true" flat round color="primary" icon="add" />
    </q-item-label>
    <q-dialog v-model="prompt" @hide="closeDialog">
      <q-card class="full-width">
        <q-form @submit="addFolder">
          <q-card-section>
            <div class="text-h6">New folder</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-input
              filled
              autofocus
              v-model="newName"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
          </q-card-section>
          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" @click="closeDialog" />
            <q-btn flat label="Add folder" type="submit" color="primary" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { TodoFolder } from '../models';
import { useTodoFolderStore } from '../../stores/todo-folder-store';
import { ref } from 'vue';

let prompt = ref(false);
const newName = ref('');
const folderStore = useTodoFolderStore();

function addFolder() {
  const newFolder: TodoFolder = {
    id: folderStore.nextId,
    name: newName.value,
  };

  folderStore.addFolder(newFolder);
  closeDialog();
}

function closeDialog() {
  newName.value = '';
  prompt.value = false;
}
</script>

<style lang="scss" scoped></style>
