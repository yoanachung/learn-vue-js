<template>
  <div>
    <q-item clickable v-for="folder in todoFolders" :key="folder.id">
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
import { useTodoFolderStore } from '../../stores/todo-folder-store';

const todoStore = useTodoFolderStore();
const todoFolders = todoStore.folders;
</script>

<style lang="scss" scoped></style>
