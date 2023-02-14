<template>
  <q-item clickable v-for="folder in todoFolders" :key="folder.id">
    <q-item-section avatar>
      <q-icon name="folder" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ folder.name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { TodoFolder } from '../models';

const todoFolders: TodoFolder[] = [
  {
    id: 1,
    name: 'test folder2',
  },
  {
    id: 2,
    name: 'test folder2',
  },
];
</script>

<style lang="scss" scoped></style>
