<template>
  <q-page class="bg-grey-3 column">
    <TaskButtonBar></TaskButtonBar>
    <TaskList></TaskList>
  </q-page>
</template>

<script setup lang="ts">
import TaskList from '../components/todo/TaskList.vue';
import TaskButtonBar from '../components/todo/TaskButtonBar.vue';
</script>
