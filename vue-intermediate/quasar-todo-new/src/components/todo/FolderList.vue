<template>
  <div>
    <FolderAddButton></FolderAddButton>
    <q-item
      clickable
      v-for="folder in folderStore.folders"
      :key="folder.id"
      :active="folder.id === folderStore.currentFolderId"
      @click="folderStore.openFolder(folder.id)"
    >
      <q-item-section avatar>
        <q-icon name="folder" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ folder.name }}</q-item-label>
      </q-item-section>
      <q-item-section side v-if="folderStore.folders.length > 1">
        <FolderDeleteButton :folderId="folder.id"></FolderDeleteButton>
      </q-item-section>
    </q-item>
  </div>
</template>

<script setup lang="ts">
import { useFolderStore } from 'src/stores/todo-folder-store';
import FolderAddButton from './FolderAddButton.vue';
import FolderDeleteButton from './FolderDeleteButton.vue';

const folderStore = useFolderStore();
</script>

<style lang="scss" scoped></style>
