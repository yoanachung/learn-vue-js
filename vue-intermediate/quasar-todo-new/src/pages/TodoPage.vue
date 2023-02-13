<template>
  <q-page class="bg-grey-3 column">
    <TodoAddButton></TodoAddButton>
    <TodoList></TodoList>
  </q-page>
</template>

<script setup lang="ts">
import TodoList from '../components/todo/TodoList.vue';
import TodoAddButton from '../components/todo/TodoAddButton.vue';
</script>
