<template>
  <div>
    <FolderAddButton></FolderAddButton>

    <q-item clickable v-for="folder in folders" :key="folder.id">
      <q-item-section avatar>
        <q-icon name="folder" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ folder.name }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script setup lang="ts">
import { useFolderStore } from '../../stores/todo-folder-store';
import FolderAddButton from './FolderAddButton.vue';

const folderStore = useFolderStore();
const folders = folderStore.folders;
</script>

<style lang="scss" scoped></style>
