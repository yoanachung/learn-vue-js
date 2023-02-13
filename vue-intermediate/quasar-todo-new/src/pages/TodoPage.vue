<template>
  <q-page class="bg-grey-3 column">
    <TodoAdd></TodoAdd>
    <TodoList></TodoList>
  </q-page>
</template>

<script setup lang="ts">
import TodoList from '../components/todo/TodoList.vue';
import TodoAdd from '../components/todo/TodoAdd.vue';
</script>
