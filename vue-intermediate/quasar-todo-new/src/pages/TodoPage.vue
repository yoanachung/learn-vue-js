<template>
  <q-page class="bg-grey-3 column">
    <TodoButtonBar></TodoButtonBar>
    <TodoList></TodoList>
  </q-page>
</template>

<script setup lang="ts">
import TodoList from '../components/todo/TodoList.vue';
import TodoButtonBar from '../components/todo/TodoButtonBar.vue';
</script>
